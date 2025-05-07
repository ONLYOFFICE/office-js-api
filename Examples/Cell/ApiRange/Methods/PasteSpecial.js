// This example pastes data from theclipboard (if it is possible) with the specified options.

// How to paste the copied or cut data from the clipboard using the special paste options.

// Create a range, copy its value and paste it into another one with the specified properties.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("test");
worksheet.GetRange("A1").Copy();
worksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);