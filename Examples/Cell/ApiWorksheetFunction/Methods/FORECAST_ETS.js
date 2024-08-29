var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var dates = ["10/1/2017", "11/1/2017", "12/1/2017", "1/1/2018", "2/1/2018", "3/1/2018"];
var numbers = [12558, 14356, 16345, 18678, 14227];

for (var i = 0; i < dates.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(dates[i]);
}
for (var j = 0; j < numbers.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

oWorksheet.GetRange("A1").SetColumnWidth(15);
var oRange1 = oWorksheet.GetRange("B1:B5");
var oRange2 = oWorksheet.GetRange("A1:A5");
oWorksheet.GetRange("B6").SetValue(oFunction.FORECAST_ETS("3/1/2018", oRange1, oRange2, 0, 1, 1));