// This example sets the array formula of a range.

// How to set the array formula value.

// Set the array formula.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C3").SetFormulaArray("={1,2,3}");