// Convert measurement units from emus to millimeters in a PDF.

// How do I convert emus to millimeters for layout in a PDF?

// Translate emu values to millimeter measurements and display the conversion in a PDF.

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);

const rgb = Api.CreateRGBColor(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(emus + ' emus are equal to ' + millimeters + ' millimeters.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);