// This example replace text from two paragraphs to another text.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oFParagraph = oDocument.GetElement(0);
oFParagraph.AddText("This is the text for the first line. The line break is added after it.");
oFParagraph.AddLineBreak();
var oSParagraph = Api.CreateParagraph();
oSParagraph.AddTabStop();
oSParagraph.AddText("This is just a sample text with a tab stop before it.");
oDocument.Push(oSParagraph);
var oRange1 = oFParagraph.GetRange();
var oRange2 = oSParagraph.GetRange();
var oRange3 = oRange1.ExpandTo(oRange2);
oRange3.Select();
var arr = ["test_1", "test_2"];
Api.ReplaceTextSmart(arr, "", "");
builder.SaveFile("docx", "ReplaceTextSmart.docx");
builder.CloseFile();