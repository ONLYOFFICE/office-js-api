// This example removes an element using the position specified.
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is paragraph #1.");
for (let nParaIncrease = 1; nParaIncrease < 5; ++nParaIncrease) {
	oParagraph = Api.CreateParagraph();
	oParagraph.AddText("This is paragraph #" + (nParaIncrease + 1) + ".");
	oDocContent.Push(oParagraph);
}
oDocContent.RemoveElement(2);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We removed paragraph #3, check that out above.");
oDocContent.Push(oParagraph);
builder.SaveFile("xlsx", "RemoveElement.xlsx");
builder.CloseFile();