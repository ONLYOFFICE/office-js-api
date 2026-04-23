// Read the current cell addressing style and display it in a cell in a spreadsheet.

// How do I check whether the column-letter or column-number addressing style is active in a spreadsheet?

// Record the active cell reference notation into a cell for inspection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());