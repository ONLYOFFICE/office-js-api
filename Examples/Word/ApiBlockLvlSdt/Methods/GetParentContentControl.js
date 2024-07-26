// This example shows how to get a content control that contains the content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt1 = Api.CreateBlockLvlSdt();
oBlockLvlSdt1.GetContent().GetElement(0).AddText("This is a parent block text content control.");
oDocument.AddElement(0, oBlockLvlSdt1);
var oBlockLvlSdt2 = Api.CreateBlockLvlSdt();
oBlockLvlSdt2.GetContent().GetElement(0).AddText("This is a block text content control added in another content control.");
oBlockLvlSdt1.AddElement(oBlockLvlSdt2, 0);
var oParentBlockLvlSdt = oBlockLvlSdt2.GetParentContentControl();
oParentBlockLvlSdt.SetAlias("№1");
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();