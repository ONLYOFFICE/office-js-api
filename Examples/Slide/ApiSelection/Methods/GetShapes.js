// This example shows how to get the selected shapes from current selection.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();

// Create two shapes
const oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
const oStroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const oShape1 = Api.CreateShape('rect', 80 * 36000, 20 * 36000, oFill1, oStroke1);
oShape1.SetPosition(0, 0);
oSlide.AddObject(oShape1);

const oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(0, 200, 100));
const oStroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const oShape2 = Api.CreateShape('ellipse', 60 * 36000, 20 * 36000, oFill2, oStroke2);
oShape2.SetPosition(100 * 36000, 0);
oSlide.AddObject(oShape2);

// Select only the first shape
oShape1.Select();
const oSelection = Api.GetSelection();
const aShapes = oSelection.GetShapes();
const sResult = 'Selected shapes count: ' + aShapes.length;

// Show result in a new shape
const oOutShapeFill = Api.CreateSolidFill(Api.CreateRGBColor(50, 70, 180));
const oOutShapeStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oOutShape = Api.CreateShape('rect', 160 * 36000, 30 * 36000, oOutShapeFill, oOutShapeStroke);
oOutShape.SetPosition(0, 30 * 36000);
const oOutDoc = oOutShape.GetDocContent();
const oOutParagraph = oOutDoc.GetElement(0);
oOutParagraph.AddText(sResult);
oSlide.AddObject(oOutShape);
