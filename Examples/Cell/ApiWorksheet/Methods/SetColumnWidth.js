// Assign a specific width to one or more columns in a spreadsheet.

// How do I change the width of a column in a spreadsheet?

// Widen or narrow columns to control how much content fits in each cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 10);
worksheet.SetColumnWidth(1, 20);