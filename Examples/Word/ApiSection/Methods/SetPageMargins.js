// This example specifies the page margins for all the pages in this section.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with margins set. ");
oParagraph.AddText("The left margin is 5 inches wide (7200 twentieths of a point). ");
oParagraph.AddText("The top margin is 2 inches high (2880 twentieths of a point). ");
oParagraph.AddText("The right margin is 1 inch wide (1440 twentieths of a point). ");
oParagraph.AddText("The bottom margin is 4 inches high (5760 twentieths of a point). ");
var oSection = oDocument.GetFinalSection();
oSection.SetPageMargins(7200, 2880, 1440, 5760);