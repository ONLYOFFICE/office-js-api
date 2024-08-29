var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var year = [2016, 2016, 2016, 2017, 2017, 2017];
var products = ["Apples", "Red apples", "Oranges", "Green apples", "Apples", "Bananas"];
var income = ["$100.00", "$150.00", "$250.00", "$50.00", "$150.00", "$200.00"];

for (var i = 0; i < year.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(year[i]);
}
for (var j = 0; j < products.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(products[j]);
}
for (var n = 0; n < income.length; n++) {
    oWorksheet.GetRange("C" + (n + 1)).SetValue(income[n]);
}

var oRange1 = oWorksheet.GetRange("C1:C6");
var oRange2 = oWorksheet.GetRange("B1:B6");
var oRange3 = oWorksheet.GetRange("A1:A6");
oWorksheet.GetRange("E6").SetValue(oFunction.AVERAGEIFS(oRange1, oRange2, "*Apples", oRange3, 2016));