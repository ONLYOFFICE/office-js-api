// This example specifies that any space before or after this paragraph set using the [ApiParaPr#SetSpacingBefore](./SetSpacingBefore.md) or [ApiParaPr#SetSpacingAfter](./SetSpacingAfter.md) spacing element, should not be applied when the preceding and following paragraphs are of the same paragraph style, affecting the top and bottom spacing respectively.
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetContextualSpacing(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph with contextual spacing set to 'false' (no paragraph style is applied).");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is a paragraph with contextual spacing set to 'true' (paragraph style is applied).");
oDocument.Push(oParagraph);