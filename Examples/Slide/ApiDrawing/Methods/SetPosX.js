// This example sets the x position of the drawing on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#F0D9B5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100), fill, stroke);
shape.SetPosition(0, 0);
slide.AddObject(shape);

shape.SetPosX(Api.MillimetersToEmus(50));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('X position was changed to 50 mm.');
