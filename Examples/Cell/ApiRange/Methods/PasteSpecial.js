// Paste data from theclipboard (if it is possible) with the specified options in a spreadsheet.

// How to paste the copied or cut data from the clipboard using the special paste options in a spreadsheet.

// Create a range, copy its value and paste it into another one with the specified properties in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("test");
worksheet.GetRange("A1").Copy();
worksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);