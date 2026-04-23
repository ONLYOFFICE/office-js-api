// Show or hide the row and column headings on a sheet in a spreadsheet.

// How do I toggle the row and column headers on or off in a spreadsheet?

// Control whether the letter and number labels along the edges of the sheet are visible in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);