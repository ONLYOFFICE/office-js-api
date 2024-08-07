// This example inserts a number of the current document page into the paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("First page");
oParagraph.AddPageBreak();
oParagraph.AddText("Second page");
oParagraph.AddPageBreak();
oParagraph.AddText("Third page");
var oSection = oDocument.GetFinalSection();
var oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("Page #");
oParagraph.AddPageNumber();
oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("Page #");
oParagraph.AddPageNumber();