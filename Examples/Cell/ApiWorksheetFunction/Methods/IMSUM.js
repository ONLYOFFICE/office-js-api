// This example shows how to return the sum of two complex numbers expressed in the x + yi or x + yj form.

// How to add two complex numbers.

// Use a function to get the sum of two complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSUM("1+3i", "0.1+1.5j", "-2+2.5i"));