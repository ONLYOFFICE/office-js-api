// Set the array formula of a range.

// How to set the array formula value.

// Set formula array and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:C3").SetFormulaArray("={1,2,3}");