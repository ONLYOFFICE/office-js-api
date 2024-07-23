// This example shows how to get a list of all the content controls from the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
var aContentControls = oDocument.GetAllContentControls();
aContentControls[0].GetElement(0).SetBold(true);
var sClassType = aContentControls[0].GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllContentControls.docx");
builder.CloseFile();