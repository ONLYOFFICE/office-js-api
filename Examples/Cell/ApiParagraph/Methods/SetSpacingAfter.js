// This example sets the spacing after the paragraph.

// How to add the spacing after the paragraphs using points.

// Get a paragraph from the shape's content then add a text specifying the spacing after a custom text.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is an example of setting a space after a paragraph. ");
oParagraph.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
oParagraph.SetSpacingAfter(1440);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oDocContent.Push(oParagraph);