// This example sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 50 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
oDocContent.RemoveAllElements();
oShape.SetVerticalTextAlign("bottom");
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it ");
oParagraph.AddText("aligning it vertically by the bottom.");
oDocContent.Push(oParagraph);
builder.SaveFile("xlsx", "SetVerticalTextAlign.xlsx");
builder.CloseFile();