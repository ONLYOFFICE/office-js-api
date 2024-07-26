// This example shows how to get an element of the inline text content control using the position specified.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
for (let nPos = 0; nPos < 10; ++nPos) {
	var curRun = Api.CreateRun();
	curRun.AddText("This is text run " + (nPos + 1) + ". ");
	oInlineLvlSdt.AddElement(curRun);
}
var changeRun = oInlineLvlSdt.GetElement(4);
changeRun.SetBold(true);
oParagraph.AddLineBreak();
oParagraph.AddLineBreak();
oParagraph.AddLineBreak();
oParagraph.AddText("We added 10 text runs to the above inline text content control. Then we changed the fifth run, so it is different from the others.");
builder.SaveFile("docx", "GetElement.docx");
builder.CloseFile();