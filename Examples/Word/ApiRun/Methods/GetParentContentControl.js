// This example shows how to get a content control that contains the run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
var oRun = Api.CreateRun();
oRun.AddText("This is a block text content control.");
oParagraph.Push(oRun);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
var oContentControl = oRun.GetParentContentControl();
var sClassType = oContentControl.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();