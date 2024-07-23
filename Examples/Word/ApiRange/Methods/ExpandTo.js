// This example returns a new range that goes beyond the specified range in any direction and spans a different range.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Lorem ipsum dolor sit amet,");
oParagraph.AddText(" consectetuer adipiscing elit,");
oParagraph.AddText(" sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
var oRangeFirst = oDocument.GetRange(0, 22);
var oRangeSecond = oDocument.GetRange(49, 123);
var oRange = oRangeFirst.ExpandTo(oRangeSecond);
oRange.SetItalic(true);
builder.SaveFile("docx", "ExpandTo.docx");
builder.CloseFile();