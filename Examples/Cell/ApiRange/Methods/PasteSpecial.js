// This example pastes data from clipboard(if it possible) with options.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.setValue("test");
oWorksheet.GetRange("A1").Copy();
oWorksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);
builder.SaveFile("xlsx", "SpeicialPaste.xlsx");
builder.CloseFile();