// This example removes all the elements from the current paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is the first text run in the current paragraph.");
oParagraph.AddElement(oRun);
oParagraph.RemoveAllElements();
oRun = Api.CreateRun();
oRun.AddText("We removed all the paragraph elements and added a new text run inside it.");
oParagraph.AddElement(oRun);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "RemoveAllElements.docx");
builder.CloseFile();