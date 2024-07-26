// This example selects the paragraph.
builder.CreateFile("docx");
var oDocument = editor.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var bResult = oParagraph.Select();
if (bResult === true) {
	oParagraph.SetItalic(true);
}
builder.SaveFile("docx", "Select.docx");
builder.CloseFile();