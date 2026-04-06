// This example sets the name of the current drawing.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(200, 220, 240));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
shape.SetName('CustomShapeName');
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Shape name was set to: ' + shape.GetName());
slide.AddObject(shape);
