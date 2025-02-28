// This example gets the placeholder type.

// How to get a placeholder type (chart, table, etc.).

// Create a shape and get its placeholder type.

let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
let oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
let oPlaceholder = Api.CreatePlaceholder("chart");
oShape.SetPlaceholder(oPlaceholder);
let oContent = oShape.GetContent();
let oParagraph = oContent.GetElement(0);
oParagraph.AddText('Placeholder type in this shape is: "' + oPlaceholder.GetType() + '"');
oSlide.AddObject(oShape);