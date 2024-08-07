// This example creates a new document section which ends at the specified paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a new paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("Scroll down to see the new section.");
var oSection = oDocument.CreateSection(oParagraph);
oSection.SetEqualColumns(1, 720);
oSection.SetPageSize(12240, 15840);
oSection.SetPageMargins(1440, 1440, 1440, 1440);
oSection.SetHeaderDistance(720);
oSection.SetFooterDistance(576);
oParagraph = Api.CreateParagraph();
oParagraph.SetSpacingBefore(100, true);
oParagraph.SetSpacingAfter(360);
oParagraph.AddText("This is a paragraph in a new section");
oDocument.Push(oParagraph);