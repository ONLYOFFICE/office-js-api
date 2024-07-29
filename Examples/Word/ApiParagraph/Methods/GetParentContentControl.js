// This example shows how to get a content control that contains the paragraph.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.Push(oBlockLvlSdt, 0);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph added to the block text content control.");
oBlockLvlSdt.AddElement(oParagraph, 0);
var oParentBlockLvlSdt = oParagraph.GetParentContentControl();
oParentBlockLvlSdt.GetRange(0, 3).SetBold(true);