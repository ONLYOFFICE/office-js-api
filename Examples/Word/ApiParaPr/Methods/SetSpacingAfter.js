// This example sets the spacing after the current paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetSpacingAfter(1440);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of setting a space after a paragraph. ");
oParagraph.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
oParagraph.SetStyle(oMyStyle);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetSpacingAfter.docx");
builder.CloseFile();