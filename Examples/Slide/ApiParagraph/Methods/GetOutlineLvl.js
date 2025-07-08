// This example shows how to get the outline level of the specified paragraph.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
slide.AddObject(shape);

const content = shape.GetDocContent();
const paragraph = content.GetElement(0);

const levelBefore = paragraph.GetOutlineLvl();
paragraph.SetOutlineLvl(8);
const levelAfter = paragraph.GetOutlineLvl();

let text =  'Outline level (index) for this paragraph is currently set to ' + levelAfter;
text += ',\n';
text += 'but originally was set to ' + levelBefore;
paragraph.AddText(text);
