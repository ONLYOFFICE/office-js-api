// This example shows how to ge t the paragraph properties which are applied to any numbered paragraph that references the given numbering definition and numbering level.
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl = oNumbering.GetLevel(0);
var oParaPr = oNumLvl.GetParaPr();
oParaPr.SetSpacingLine(480, "auto");
oParaPr.SetJc("both");
oParaPr.SetIndFirstLine(720);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the first element of a parent numbered list which starts with '1'");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second element of a parent numbered list which starts with '2'");
oParagraph.SetNumbering(oNumLvl);
oDocument.Push(oParagraph);