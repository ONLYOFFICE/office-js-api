var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Rate");
oWorksheet.GetRange("A2").SetValue(0.05);
var values = ["Payment", -10000, 3000, 4500, 6000];

for (var i = 0; i < values.length; i++) {
    oWorksheet.GetRange("B" + (i + 1)).SetValue(values[i]);
}
var oRange = oWorksheet.GetRange("B2:B5");
oWorksheet.GetRange("B6").SetValue(oFunction.NPV(0.05, oRange));