var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var column1 = [13, 14, 15];
var column2 = [23, 24, 25];

for (var i = 0; i < column1.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(column1[i]);
}
for (var j = 0; j < column2.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(column2[j]);
}

var oRange = oWorksheet.GetRange("A1:B3");
oWorksheet.GetRange("C3").SetValue(oFunction.ROWS(oRange));