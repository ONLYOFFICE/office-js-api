var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (var i = 0; i < values.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

oWorksheet.GetRange("B1").SetValue("Paid interest rate");
oWorksheet.GetRange("B2").SetValue(0.2);
oWorksheet.GetRange("C1").SetValue("Received interest rate");
oWorksheet.GetRange("C2").SetValue(0.23);

var oRange = oWorksheet.GetRange("A2:A5");
oWorksheet.GetRange("B5").SetValue(oFunction.MIRR(oRange, 0.2, 0.23));