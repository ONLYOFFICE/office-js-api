// This example shows how to get the last Run with text in the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
for (let nRunIncrease = 0; nRunIncrease < 5; ++nRunIncrease) {
	var oRun = Api.CreateRun();
	oRun.AddText("This run # " + (nRunIncrease + 1) );
	oParagraph.Push(oRun);
	oParagraph.AddLineBreak();
}
var oLastRun = oParagraph.GetLastRunWithText();
oLastRun.AddText(" Last run.");
builder.SaveFile("docx", "GetLastRunWithText.docx");
builder.CloseFile();