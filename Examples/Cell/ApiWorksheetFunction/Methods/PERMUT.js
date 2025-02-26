// This example shows how to return the number of permutations for a given number of objects that can be selected from the total objects.

// How to return the number of permutations for a given number of objects.

// Use a function to claculate the number of permutations.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PERMUT(32, 2));