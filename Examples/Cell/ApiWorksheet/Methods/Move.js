// Reorder sheets by shifting one before or after another in a spreadsheet.

// Change the tab position of a sheet relative to your other sheets in a spreadsheet?

// Reorganize sheet sequence to group related data together in a spreadsheet.

let sheet1 = Api.GetActiveSheet();
Api.AddSheet("Sheet2");
let sheet2 = Api.GetActiveSheet();
sheet2.Move(sheet1);