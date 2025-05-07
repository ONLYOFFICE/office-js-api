// This example shows how to check whether a value is text, and returns the text if it is, or returns double quotes (empty text) if it is not.

// How to return a text if a value is a text otherwise return an empty string.

// Use a function to check whether a cell value is a text.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.T("date and time"));