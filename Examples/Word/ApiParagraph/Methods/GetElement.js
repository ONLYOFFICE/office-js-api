// This example shows how to get a paragraph element using the position specified.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.RemoveAllElements();
var oRun = Api.CreateRun();
oRun.AddText("This is the text for the first text run. Do not forget a space at its end to separate from the second one. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is the text for the second run. We will set it bold afterwards. It also needs space at its end. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is the text for the third run. It ends the paragraph.");
oParagraph.AddElement(oRun);
oRun = oParagraph.GetElement(1);
oRun.SetBold(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetElement.docx");
builder.CloseFile();