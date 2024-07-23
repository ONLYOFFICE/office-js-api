// This example shows how to get the tag attribute for the container.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with a tag set to it.");
oInlineLvlSdt.AddElement(oRun, 0);
oInlineLvlSdt.SetTag("This is a tag");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var sTag = oInlineLvlSdt.GetTag();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tag: " + sTag);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTag.docx");
builder.CloseFile();