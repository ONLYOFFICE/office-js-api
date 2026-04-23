// Assign an outline level to a paragraph in a presentation.

// How do I set the outline hierarchy level of a paragraph in a presentation?

// Configure the outline depth of a paragraph using paragraph properties in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
slide.AddObject(shape);

const outlineLvlIndex = 8;

const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
const paraPr = paragraph.GetParaPr();
paraPr.SetOutlineLvl(outlineLvlIndex);
paragraph.AddText("This is a paragraph with outline level parameter set to " + (outlineLvlIndex + 1));