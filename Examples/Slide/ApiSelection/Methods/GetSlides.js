// This example shows how to get the selected slides from current selection.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();

const oSelection = Api.GetSelection();

let sResult = 'Initial selected slides count: ' + oSelection.GetSlides().length + '\n';


/*

// Create one more slide and select it
const oSecondSlide = Api.CreateSlide();
oPresentation.AddSlide(oSecondSlide);
oSecondSlide.Select();

sResult += 'Selected slides count after adding a new slide: ' + oSelection.GetSlides().length;

*/


// Show result in a new shape
const oOutShapeFill = Api.CreateSolidFill(Api.CreateRGBColor(50, 70, 180));
const oOutShapeStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oOutShape = Api.CreateShape('rect', 160 * 36000, 30 * 36000, oOutShapeFill, oOutShapeStroke);
oOutShape.SetPosition(0, 30 * 36000);
const oOutDoc = oOutShape.GetDocContent();
const oOutParagraph = oOutDoc.GetElement(0);
oOutParagraph.AddText(sResult);
oSlide.AddObject(oOutShape);
