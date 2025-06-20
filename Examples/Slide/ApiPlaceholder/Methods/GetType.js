// This example gets the placeholder type.

// How to get a placeholder type (chart, table, etc.).

// Create a shape and get its placeholder type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Placeholder type in this shape is: "' + placeholder.GetType() + '"');
slide.AddObject(shape);
