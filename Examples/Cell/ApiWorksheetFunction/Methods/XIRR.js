// This example shows how to return the internal rate of return for a schedule of cash flows.

// How to return the internal rate of return.

// Use a function to return the internal rate of return.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];
var dates = ["Dates", "1/1/2018", "4/1/2018", "8/1/2018", "12/1/2018"];

for (var i = 0; i < values.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}
for (var j = 0; j < dates.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(dates[j]);
}

oWorksheet.GetRange("B1").SetColumnWidth(15);
var oRange1 = oWorksheet.GetRange("A2:A5");
var oRange2 = oWorksheet.GetRange("B2:B5");
oWorksheet.GetRange("C5").SetValue(oFunction.XIRR(oRange1, oRange2));