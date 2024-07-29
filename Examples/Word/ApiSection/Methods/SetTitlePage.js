// This example specifies whether the current section in this document has the different header and footer for the section first page.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This page does not have a footer, as it is a title page. ");
oParagraph.AddText("Scroll down the page to see if the footer was removed.");
var oSection = oDocument.CreateSection(oParagraph);
oSection.SetTitlePage(true);
var oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is page footer. ");
oParagraph.AddText("You will only see it for page #2.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is page #2 and it has a footer. ");
oParagraph.AddText("Scroll down the page to see it.");
oDocument.Push(oParagraph);