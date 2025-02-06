// This example shows how to get the spacing before value of the paragraph.
// How to get spacing information which is before the paragraph.
// Get two consecutive paragraphs add spacing between them then get the spacing before second one and display it in the worksheet. 
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is an example of setting a space before a paragraph.");
oParagraph.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oParagraph2.SetSpacingBefore(1440);
oDocContent.Push(oParagraph2);
var nSpacingBefore = oParagraph2.GetSpacingBefore();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Spacing before: " + nSpacingBefore);
oDocContent.Push(oParagraph);