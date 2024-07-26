// This example sets the lock to the inline text content control.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with the content lock set to it.");
oInlineLvlSdt.SetLock("sdtContentLocked");
oInlineLvlSdt.AddElement(oRun, 0);
var sLock = oInlineLvlSdt.GetLock();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Lock type: " + sLock);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetLock.docx");
builder.CloseFile();