// Retrieve the currently selected object or text in a presentation.

// How do I access the selected content in a presentation in a presentation?

// Read the properties of selected elements in a presentation.

const presentation = Api.GetPresentation();

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 10 * 36000, fill, stroke);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
shape.Select();

const selection = Api.GetSelection();
const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Type: ' + selection.GetType());