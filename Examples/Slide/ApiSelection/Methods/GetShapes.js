// This example shows how to get the selected shapes from current selection.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill1 = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
const stroke1 = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape('rect', 80 * 36000, 20 * 36000, fill1, stroke1);
shape1.SetPosition(0, 0);
slide.AddObject(shape1);

const fill2 = Api.CreateSolidFill(Api.CreateRGBColor(0, 200, 100));
const stroke2 = Api.CreateStroke(0, Api.CreateNoFill());
const shape2 = Api.CreateShape('ellipse', 60 * 36000, 20 * 36000, fill2, stroke2);
shape2.SetPosition(100 * 36000, 0);
slide.AddObject(shape2);

shape1.Select();
const selection = Api.GetSelection();
const shapes = selection.GetShapes();
const result = 'Selected shapes count: ' + shapes.length;

const outShapeFill = Api.CreateSolidFill(Api.CreateRGBColor(50, 70, 180));
const outShapeStroke = Api.CreateStroke(0, Api.CreateNoFill());
const outShape = Api.CreateShape('rect', 160 * 36000, 30 * 36000, outShapeFill, outShapeStroke);
outShape.SetPosition(0, 30 * 36000);
const outDoc = outShape.GetDocContent();
const outParagraph = outDoc.GetElement(0);
outParagraph.AddText(result);
slide.AddObject(outShape);
