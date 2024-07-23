// This example adds a oRun to the paragraph.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is run #0, you must not push it to take effect.");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
for (let nRunIncrease = 0; nRunIncrease < 5; ++nRunIncrease) {
	oRun = Api.CreateRun();
	oRun.AddText("This is run #" + (nRunIncrease + 1) + ", you must push it to take effect.");
	oParagraph.AddLineBreak();
	oParagraph.Push(oRun);
}
builder.SaveFile("docx", "Push.docx");
builder.CloseFile();