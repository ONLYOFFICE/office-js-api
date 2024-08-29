var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("The cursor will be placed after the current content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.MoveCursorOutside(true);