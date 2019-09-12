var getValue = (tag) => {
        var result;
        if (result = document.getElementById(tag).value === null)
            return 0;
        else
            return [tag, result];
    }
    // use map concept to return key-value pair, tag as key and result as value
function addRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var lastRow = table.rows[rowCount - 1];
    var lastRowValue = parseInt(lastRow.cells[0].children[0].value);
    var newRow = table.insertRow(rowCount);
    newRow.cells[0].children[0].value = lastRowValue + 1;
}

function output() {
    return "queryString" + i;
}

function queryStringCompiler(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var queryString = "";
    for (i = 0; i < rowCount; i++)
        queryString += output(i);
    return queryString;
}
// if  ( returnValue != 0 ) map.set();