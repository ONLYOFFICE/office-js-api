// Move the sheet to another location in the workbook in a spreadsheet.

// How to change an order of the sheet in a spreadsheet.

// Move for a worksheet in a spreadsheet.

let sheet1 = Api.GetActiveSheet();
Api.AddSheet("Sheet2");
let sheet2 = Api.GetActiveSheet();
sheet2.Move(sheet1);