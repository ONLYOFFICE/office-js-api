// This example shows how to get the type of the selection in different scenarios.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();

const oSelection = Api.GetSelection();

// Get type without any selection
let sType = oSelection.GetType();
let sResult = 'Type: ' + sType + ' (no selection scenario)\n';

// Get type with a selected shape
const oFill = Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 0));
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape('rect', 200 * 36000, 10 * 36000, oFill, oStroke);
oSlide.AddObject(oShape);
oShape.Select();

sType = oSelection.GetType();
sResult += 'Type: ' + sType + ' (shape added scenario)\n';

/*

// Get type with a selected text
const oDocContent = oShape.GetDocContent();
const oParagraph = oDocContent.GetElement(0);
oParagraph.AddText('This is a text inside black rectangle');
oParagraph.Select();

sType = oSelection.GetType();
sResult += 'Type: ' + sType + ' (text selected scenario)\n';

*/

// Show result
const oOutShapeFill = Api.CreateSolidFill(Api.CreateRGBColor(50, 70, 180));
const oOutShapeStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oOutShape = Api.CreateShape('rect', 200 * 36000, 30 * 36000, oOutShapeFill, oOutShapeStroke);
oOutShape.SetPosition(0, 20 * 36000);

const oOutDoc = oOutShape.GetDocContent();
const oOutParagraph = oOutDoc.GetElement(0);
oOutParagraph.AddText(sResult);
oSlide.AddObject(oOutShape);
