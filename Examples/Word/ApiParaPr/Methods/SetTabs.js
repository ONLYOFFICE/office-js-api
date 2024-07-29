// This example sets a sequence of custom tab stops which will be used for any tab characters in the paragraph.
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
oParaPr.SetTabs([1440, 4320, 7200], ["left", "center", "right"]);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oMyStyle);
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 1 inch left");
oParagraph.AddLineBreak();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 3 inches center");
oParagraph.AddLineBreak();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("Custom tab - 5 inches right");