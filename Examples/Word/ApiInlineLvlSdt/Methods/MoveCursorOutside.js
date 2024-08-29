var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("The cursor will be placed after the current content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.MoveCursorOutside(true);