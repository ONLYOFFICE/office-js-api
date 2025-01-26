// This example shows how to get the page PrintHeadings property which specifies whether the sheet row/column headings must be printed or not.
let worksheet = Api.GetActiveSheet();
worksheet.SetPrintHeadings(true);
worksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page: " + worksheet.GetPrintHeadings());