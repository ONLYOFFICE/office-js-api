// Paste clipboard data into a cell using controlled options in a spreadsheet.

// How do I paste only specific parts of copied data, such as values or formats, in a spreadsheet?

// Reuse copied cell content in a new location while choosing exactly what gets transferred in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("test");
worksheet.GetRange("A1").Copy();
worksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);