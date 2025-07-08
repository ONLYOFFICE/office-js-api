// This example sets the placeholder index.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

let rgb = Api.CreateRGBColor(50, 100, 150);
let fill = Api.CreateSolidFill(rgb);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);

const placeholder = Api.CreatePlaceholder();
shape.SetPlaceholder(placeholder);

placeholder.SetIndex(42);
slide.AddObject(shape);

rgb = Api.CreateRGBColor(50, 100, 150);
fill = Api.CreateSolidFill(rgb);
stroke = Api.CreateStroke(0, Api.CreateNoFill());
shape = Api.CreateShape('rect', 300 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(0, 110 * 36000);
slide.AddObject(shape);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Placeholder index set to ' + placeholder.GetIndex());
