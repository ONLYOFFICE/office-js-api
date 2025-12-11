// This example shows how to convert emus to millimeters.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);

const rgb = Api.CreateRGBColor(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(emus + ' emus are equal to ' + millimeters + ' millimeters.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
