// This example shows how to get a collection of content control objects in the current content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oBlockLvlSdt1 = Api.CreateBlockLvlSdt();
oBlockLvlSdt1.GetContent().GetElement(0).AddText("This is the first block text content control.");
var oBlockLvlSdt2 = Api.CreateBlockLvlSdt();
oBlockLvlSdt2.GetContent().GetElement(0).AddText("This is the second block text content control.");
oBlockLvlSdt.AddElement(oBlockLvlSdt1, 0);
oBlockLvlSdt.AddElement(oBlockLvlSdt2, 1);
oDocument.AddElement(0, oBlockLvlSdt);
var aContentControls = oBlockLvlSdt.GetAllContentControls();
aContentControls[0].GetContent().GetElement(0).SetBold(true);
var sClassType = aContentControls[0].GetClassType();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllContentControls.docx");
builder.CloseFile();