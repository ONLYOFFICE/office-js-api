// This example specifies whether the sheet row/column headers must be displayed or not.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The sheet settings make it display no row/column headers");
worksheet.SetDisplayHeadings(false);