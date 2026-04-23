// Convert picas to points in a presentation.

// Use the Api object to convert measurement units.

// Display the conversion result in a shape on the slide.

const picas = 100;
const points = Api.PicasToPoints(picas);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(picas + ' picas are equal to ' + points + ' points.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);