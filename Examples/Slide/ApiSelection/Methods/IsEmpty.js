// This example shows how to check if the selection is empty.

const oPresentation = Api.GetPresentation();
const oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();

const oSelection = Api.GetSelection();

// Get selection status before and after adding a shape
let sResult = 'Step 1 - Is selection empty: ' + oSelection.IsEmpty() + '\n';

const oFill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
const oStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oShape = Api.CreateShape('rect', 100 * 36000, 100 * 36000, oFill, oStroke);
oShape.SetPosition(0, 0);
oSlide.AddObject(oShape);
oShape.Select();

sResult += 'Step 2 - Is selection empty: ' + oSelection.IsEmpty();

// Show result in a new shape
const oOutFill = Api.CreateSolidFill(Api.CreateRGBColor(50, 70, 180));
const oOutStroke = Api.CreateStroke(0, Api.CreateNoFill());
const oOutShape = Api.CreateShape('rect', 200 * 36000, 30 * 36000, oOutFill, oOutStroke);
oOutShape.SetPosition(0, 110 * 36000);

const oOutDoc = oOutShape.GetDocContent();
const oOutParagraph = oOutDoc.GetElement(0);
oOutParagraph.AddText(sResult);
oSlide.AddObject(oOutShape);
