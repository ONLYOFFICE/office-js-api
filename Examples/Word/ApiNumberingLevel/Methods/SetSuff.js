// This example specifies the content which will be added between the given numbering level text and the text of every numbered paragraph which references that numbering level.
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl = oNumbering.GetLevel(0);
oNumLvl.SetCustomType("decimalZero", "repeating text %1", "left");
oNumLvl.SetSuff("space");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the first element of a numbered list using custom text with numbering");
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the second element of a numbered list using custom text with numbering");
oDocument.Push(oParagraph);