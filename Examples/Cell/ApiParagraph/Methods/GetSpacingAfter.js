// This example shows how to get the spacing after value of the paragraph.

// How to get the spacing information which is after the paragraph.

// Get two consecutive paragraphs, add the spacing between them then get the spacing after the first one and display it in the worksheet. 

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph1 = oDocContent.GetElement(0);
oParagraph1.AddText("This is an example of setting a space after a paragraph. ");
oParagraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
oParagraph1.SetSpacingAfter(1440);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oParagraph2.AddLineBreak();
var nSpacingAfter = oParagraph1.GetSpacingAfter();
oParagraph2.AddText("Spacing after: " + nSpacingAfter);
oDocContent.Push(oParagraph2);