// This example adds a paragraph to the document.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oRun = Api.CreateRun();
oRun.AddText("Number of paragraph elements at this point: ");
oRun.AddTabStop();
oRun.AddText("" + oParagraph.GetElementsCount());
oRun.AddLineBreak();
oParagraph.AddElement(oRun);
oRun.AddText("Number of paragraph elements after we added a text run: ");
oRun.AddTabStop();
oRun.AddText("" + oParagraph.GetElementsCount());
oDocument.AddElement(0, oParagraph);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();