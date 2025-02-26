// This example shows how to return the difference of two complex numbers expressed in the x + yi or x + yj form.

// How to substract two complex numbers.

// Use a function to get the difference of two complex number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IMSUB("1+3i", "-2+2.5i"));