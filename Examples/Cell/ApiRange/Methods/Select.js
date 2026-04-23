// Select a cell range in a spreadsheet.

// How do I highlight a specific group of cells in a spreadsheet?

// Mark a range as the active selection so further actions apply to it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
range.Select();
Api.GetSelection().SetValue("selected");