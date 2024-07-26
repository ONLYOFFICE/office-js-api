// This example shows how to get all font names from all elements inside the run.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.SetFontFamily("Calibri Light");
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
var aFontNames = oRun.GetFontNames();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Run font names: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aFontNames.length; i++ ){
	oParagraph.AddText(aFontNames[i]);
	oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFontNames.docx");
builder.CloseFile();