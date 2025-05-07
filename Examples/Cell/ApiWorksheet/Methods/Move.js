// This example moves the sheet to another location in the workbook.

// How to change an order of the sheet.

// Move a sheet.

let sheet1 = Api.GetActiveSheet();
Api.AddSheet("Sheet2");
let sheet2 = Api.GetActiveSheet();
sheet2.Move(sheet1);