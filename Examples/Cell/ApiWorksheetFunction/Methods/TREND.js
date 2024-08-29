var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var month = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sales = ["Sales", "$1,500.00", "$1,230.00", "$1,700.00", "$1,000.00", "$980.00", "$1,470.00", "$1,560.00", "$1,640.00", "$1,420.00", "$1,100.00"];

for (var i = 0; i < month.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(month[i]);
}
for (var j = 0; j < sales.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(sales[j]);
}

oWorksheet.GetRange("C1").SetValue("Trend");
var oRange1 = oWorksheet.GetRange("B2:B11");
var oRange2 = oWorksheet.GetRange("A2:A11");
oWorksheet.GetRange("C2:C11").SetValue(oFunction.TREND(oRange1, oRange2));