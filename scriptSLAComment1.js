// INITIAL VARS
var tableQuery = 'contract_sla'; // Name of the table to query (Contract SLA table)
var fieldChange = 'start_condition'; // Name of the field to be modified
// var queryStr = 'start_conditionLIKEbusiness_service^active=true'; 
var queryStr = 'start_conditionLIKEbusiness_service^active=true^name=Resolution SLA_IPOS_Rxlogix_DSJ_P4^ORnameLIKEPower^ORname=DSE INC Prio2 Closure 1d  (1d=16h)';
// Query to filter SLAs: matches conditions with 'business_service', active records, and specific names
var oldVal = '', // Placeholder for the current value of the field being changed
    newVal = '', // Placeholder for the updated value of the field being changed
    oldSysID = '', // Placeholder for the old system ID from 'business_service'
    newSysID = ''; // Placeholder for the new system ID mapped to 'service_offering'
var pattern1 = 'business_service=', // Pattern to identify 'business_service=' in the field
    pattern2 = 'business_service'; // Pattern to identify 'business_service' in the field
var replaceField = 'service_offering'; // New field to replace 'business_service'
var result = ''; // Temporary storage for the split result of the field value
var errSerOffList = []; // Array to store errors (failed mappings)
var updateFlag = true; // Flag to determine whether the record should be updated

// QUERY AND UPDATE
var sla = new GlideRecord(tableQuery); // Create a GlideRecord object for the 'contract_sla' table
sla.addEncodedQuery(queryStr); // Add the encoded query string to filter the records
sla.setLimit(5); // Limit the number of records retrieved to 5 (for testing purposes)
sla.query(); // Execute the query

while (sla.next()) { // Loop through each record in the result set
    oldVal = sla.getValue(fieldChange); // Get the value of the 'start_condition' field
    result = oldVal.split('^'); // Split the value into an array using '^' as the delimiter
    for (var i = 0; i < result.length; i++) { // Loop through each condition in the array
        if (result[i].includes(pattern1)) { // If the condition contains 'business_service='
            oldSysID = result[i].slice(result[i].length - 32); // Extract the last 32 characters (assumes it's the sys_id)
            newSysID = getSO(oldSysID); // Call the function to get the new 'service_offering' sys_id
            if (!newSysID) { // If the mapping fails (no service offering found)
                errSerOffList.push(oldSysID); // Add the old sys_id to the error list
                updateFlag = false; // Set the update flag to false
                continue; // Skip to the next iteration
            }
            // Replace 'business_service=<sys_id>' with 'service_offering=<new_sys_id>'
            result[i] = result[i].replace(pattern1 + oldSysID, replaceField + '=' + newSysID);
            continue; // Skip to the next iteration
        }
        if (result[i].includes(pattern2)) { // If the condition contains 'business_service' (not as a key-value pair)
            // Replace 'business_service' with 'service_offering'
            result[i] = result[i].replace(pattern2, replaceField);
            continue; // Skip to the next iteration
        }
    }
    if (updateFlag) { // If no errors occurred during the mapping
        newVal = result.join('^'); // Join the updated array back into a string
        sla.setValue(fieldChange, newVal); // Set the updated value to the 'start_condition' field
        sla.update(); // Save the record
    } else { 
        updateFlag = true; // Reset the update flag for the next record
    }
}

// LOG ERROR LEGACY LIST
if (errSerOffList.length > 0) { // If there are any failed mappings
    // Log the sys_ids of the failed mappings
    gs.info('STRY0102921 - BS ERROR LIST: ' + errSerOffList.join(','));
}

// GET SERVICE OFFERING
function getSO(bsID) { 
    var so = new GlideRecord('service_offering'); // Create a GlideRecord object for 'service_offering'
    so.addQuery('u_legacy_service', bsID); // Query for records where 'u_legacy_service' matches the old sys_id
    so.setLimit(1); // Limit the result to one record
    so.query(); // Execute the query
    return (so.next() ? so.sys_id + '' : ''); // Return the sys_id if a record is found, else return an empty string
}
