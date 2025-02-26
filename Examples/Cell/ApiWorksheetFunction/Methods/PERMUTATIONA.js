// This example shows how to return the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects.

// How to return the number of permutations for a given number of objects with duplicates.

// Use a function to claculate the number of permutations including duplicates.

const oWorksheet = Api.GetActiveSheet();

//method params
var number = 32;
var number_chosen = 2;

oWorksheet.GetRange("A1").SetValue(number);
oWorksheet.GetRange("B1").SetValue(number_chosen);

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.PERMUTATIONA(number, number_chosen);

oWorksheet.GetRange("C1").SetValue(ans);
