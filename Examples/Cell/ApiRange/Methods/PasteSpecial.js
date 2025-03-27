// This example pastes data from clipboard(if it possible) with options.
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("test");
worksheet.GetRange("A1").Copy();
worksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);