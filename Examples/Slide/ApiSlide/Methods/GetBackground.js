// This example returns the background of the current presentation slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('3D5A6E'));
slide.SetBackground(fill);

const bgFill = slide.GetBackground();

const stroke = Api.CreateStroke(Api.MillimetersToEmus(3), Api.CreateSolidFill(Api.HexColor('FFFFFF')));
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(80), Api.MillimetersToEmus(60), bgFill, stroke);
shape.SetPosition(Api.MillimetersToEmus(80), Api.MillimetersToEmus(-20));
slide.AddObject(shape);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This shape has the same background fill as the slide and white border.');
