// This example shows how to get the selected slides from current selection.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const selection = Api.GetSelection();
let text = 'Initial selected slides count: ' + selection.GetSlides().length + '\n';

/*

const secondSlide = Api.CreateSlide();
presentation.AddSlide(secondSlide);
secondSlide.Select();

text += 'Selected slides count after adding a new slide: ' + selection.GetSlides().length;

*/

const outShapeFill = Api.CreateSolidFill(Api.CreateRGBColor(50, 70, 180));
const outShapeStroke = Api.CreateStroke(0, Api.CreateNoFill());
const outShape = Api.CreateShape('rect', 160 * 36000, 30 * 36000, outShapeFill, outShapeStroke);
outShape.SetPosition(0, 30 * 36000);

const outDoc = outShape.GetDocContent();
const outParagraph = outDoc.GetElement(0);
outParagraph.AddText(text);
slide.AddObject(outShape);
