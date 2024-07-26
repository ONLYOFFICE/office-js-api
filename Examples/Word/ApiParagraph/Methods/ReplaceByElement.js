// This example replaces the paragraph with a block level content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("The paragraph was replaced with the current content control.");
oParagraph.ReplaceByElement(oBlockLvlSdt);
builder.SaveFile("docx", "ReplaceByElement.docx");
builder.CloseFile();