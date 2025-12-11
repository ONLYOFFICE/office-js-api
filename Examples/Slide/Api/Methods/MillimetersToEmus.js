// This example shows how to convert millimeters to emus.

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);

const rgb = Api.CreateRGBColor(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
