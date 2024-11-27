// This example sets a custom start page index for section
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This section starts with second page number");
oParagraph.AddPageBreak();
oParagraph.AddText("Third page");
oParagraph.AddPageBreak();
oParagraph.AddText("Fourth page");
let oSection = oParagraph.GetSection();
oSection.SetStartPageNumber(2);
let oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("Page #");
oParagraph.AddPageNumber();
oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("Page #");
oParagraph.AddPageNumber();