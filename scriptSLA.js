// INITIAL VARS
var tableQuery = 'contract_sla';
var fieldChange = 'cancel_condition';
var queryStr = 'cancel_conditionLIKEbusiness_service^active=true^name=SAP BW  DSI -Incident-P4 Response^ORname=SAP BW  SCM DSI -Incident-P3 Resolution^ORnameLIKEDSE INC Prio3';
var pattern1 = 'business_service=';
var pattern2 = 'business_service';
var replaceField = 'service_offering';
var errSerOffList = [];

// QUERY AND UPDATE
var sla = new GlideRecord(tableQuery);
sla.addEncodedQuery(queryStr);
sla.query();

while (sla.next()) {
    var oldVal = sla.getValue(fieldChange);
    var result = oldVal.split('^');
    var updateFlag = true;

    for (var i = 0; i < result.length; i++) {
        if (result[i].includes(pattern1)) {
            var oldSysID = result[i].slice(result[i].length - 32);
            var newSysID = getSO(oldSysID);

            if (!newSysID) {
                errSerOffList.push(oldSysID);
                updateFlag = false;
                break;
            }

            result[i] = result[i].replace(pattern1 + oldSysID, replaceField + '=' + newSysID);
        } else if (result[i].includes(pattern2)) {
            result[i] = result[i].replace(pattern2, replaceField);
        }
    }

    if (updateFlag) {
        sla.setValue(fieldChange, result.join('^'));
        sla.update();
    }
}

// LOG ERROR LEGACY LIST
if (errSerOffList.length > 0) {
    gs.info('STRY0102921 - Unmapped legacy services: ' + errSerOffList.join(', '));
}

// GET SERVICE OFFERING
function getSO(bsID) {
    var so = new GlideRecord('service_offering');
    so.addQuery('u_legacy_service', bsID);
    so.setLimit(1);
    so.query();
    return so.next() ? so.sys_id.toString() : null;
}
