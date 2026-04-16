// Set the width of the specified column in a spreadsheet.

// How to set a column width in a spreadsheet.

// Resize column width using the worksheet API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 10);
worksheet.SetColumnWidth(1, 20);