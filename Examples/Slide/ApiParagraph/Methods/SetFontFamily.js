// This example sets all 4 font slots with the specified font family.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily('Consolas');
slide.AddObject(shape);
