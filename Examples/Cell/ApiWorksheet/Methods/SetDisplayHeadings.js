// This example specifies whether the sheet row/column headers must be displayed or not.

// How to set whether sheet headings should be displayed or not.

// Set a boolean value representing whether to display row/column headings or not.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);
