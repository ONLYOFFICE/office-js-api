// This example shows how to return the internal rate of return for a series of cash flows.
// How to calculate the internal rate of the return for a series of cash flows.
// Use a function to get the internal rate.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var values = ["Values", "-$40,000.00", "$10,000.00", "$15,000.00", "$20,000.00"];

for (var i = 0; i < values.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(values[i]);
}

var oRange = oWorksheet.GetRange("A2:A5");
oWorksheet.GetRange("B5").SetValue(oFunction.IRR(oRange));