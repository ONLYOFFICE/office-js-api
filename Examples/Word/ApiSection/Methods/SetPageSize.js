// This example sSpecifies the properties (size and orientation) for all the pages in the section.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a page size set. ");
oParagraph.AddText("The page width is 5 inches (7200 twentieths of a point). ");
oParagraph.AddText("The page height is 3 inches (4320 twentieths of a point). ");
oParagraph.AddText("The font size is default (11 points).");
var oSection = oDocument.GetFinalSection();
oSection.SetPageMargins(720, 720, 720, 720);
oSection.SetPageSize(7200, 4320);