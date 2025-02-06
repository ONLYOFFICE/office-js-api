// This example shows how to check if there is an error in the formula in the first argument. The function returns the result of the formula if there is no error, or the value specified in the second argument if there is one.
// How to check a formula.
// Use a function to get a result from a formula if an error occurs show specified error message.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var stock = ["Stock", 0, 84];
var values = ["Total value", "$5.43", "$297.36"];
oWorksheet.GetRange("C1").SetValue("Unit Price");

for (var i = 0; i < stock.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(stock[i]);
}
for (var j = 0; j < values.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(values[j]);
}
for (var n = 1; n < values.length; n++) {
    var value1 = oWorksheet.GetRange("B" + (n + 1)).GetValue();
    var value2 = oWorksheet.GetRange("A" + (n + 1)).GetValue();
    oWorksheet.GetRange("C" + (n + 1)).SetValue(oFunction.IFERROR(value1/value2, "Out of stock"));
}