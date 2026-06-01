// Switch the cell addressing style between letter-column and row-column notation in a spreadsheet.

// How do I change the way cell addresses are displayed across the entire workbook in a spreadsheet?

// Choose a preferred coordinate style for all cell references and formulas in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetReferenceStyle("xlR1C1");
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());