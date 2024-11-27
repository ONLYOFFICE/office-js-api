// This example gets a start page index of section
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
let oSection = oParagraph.GetSection();
oSection.SetStartPageNumber(5);
let nStartPageNumber = oSection.GetStartPageNumber();
oParagraph.AddText("The start page number for this section is: " + nStartPageNumber);
let oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("Page #");
oParagraph.AddPageNumber();
oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("Page #");
oParagraph.AddPageNumber();