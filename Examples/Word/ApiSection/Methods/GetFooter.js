// This example shows how to get the content for the specified footer type.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a footer. ");
oParagraph.AddText("Scroll down the page to see it.");
var oSection = oDocument.GetFinalSection();
var oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is a page footer");