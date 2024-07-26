// This example shows how to get the previous section.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("Scroll down to see the new section.");
var oSection1 = oDocument.CreateSection(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph in the first section");
oDocument.Push(oParagraph);
var oSection2 = oDocument.CreateSection(oParagraph);
var oPreviousSection = oSection2.GetPrevious();
oPreviousSection.SetPageMargins(7200, 2880, 1440, 5760);
builder.SaveFile("docx", "GetPrevious.docx");
builder.CloseFile();