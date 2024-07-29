// This example selects the paragraph.
var oDocument = editor.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var bResult = oParagraph.Select();
if (bResult === true) {
	oParagraph.SetItalic(true);
}