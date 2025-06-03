// This example shows how to check if the selection is empty.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const selection = Api.GetSelection();
let text = 'Step 1 - Is selection empty: ' + selection.IsEmpty() + '\n';

const fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 100 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(0, 0);
slide.AddObject(shape);
shape.Select();
text += 'Step 2 - Is selection empty: ' + selection.IsEmpty();

const outFill = Api.CreateSolidFill(Api.CreateRGBColor(50, 70, 180));
const outStroke = Api.CreateStroke(0, Api.CreateNoFill());
const outShape = Api.CreateShape('rect', 200 * 36000, 30 * 36000, outFill, outStroke);
outShape.SetPosition(0, 110 * 36000);

const outDoc = outShape.GetDocContent();
const outParagraph = outDoc.GetElement(0);
outParagraph.AddText(text);
slide.AddObject(outShape);
