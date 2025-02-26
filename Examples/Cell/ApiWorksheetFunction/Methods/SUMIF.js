// This example shows how to add the cells specified by a given condition or criteria.

// How to sum up all elements under the condition.

// Use a function to estimate a sum from the cells by a given condition.

var oWorksheet = Api.GetActiveSheet();
var product = ["Product", "Apple", "Orange", "Banana"]
var totalValue = ["Total Value", "$736.00", "$924.00", "$888.00"];

for (var i = 0; i < product.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(product[i]);
}
for (var n = 0; n < totalValue.length; n++) {
    oWorksheet.GetRange("B" + (n + 1)).SetValue(totalValue[n]);
}

var oFunction = Api.GetWorksheetFunction();
var oRange = oWorksheet.GetRange("B2:B4");
oWorksheet.GetRange("C4").SetValue(oFunction.SUMIF(oRange, ">800"));