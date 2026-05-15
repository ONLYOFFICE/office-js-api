// Add row numbers and column letters to printed output in a spreadsheet.

// How do I include row and column identifiers on my printed pages in a spreadsheet?

// Display the grid labels (A, B, C and 1, 2, 3) when printing your spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());