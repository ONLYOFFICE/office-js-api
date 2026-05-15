// Convert measurement units from emus to points in a presentation.

// How can I convert emus to points for font and size measurements in a presentation?

// Transform measurement values to display point equivalents in a presentation.

const emus = 100;
const points = Api.EmusToPoints(emus);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(emus + ' emus are equal to ' + points + ' points.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);