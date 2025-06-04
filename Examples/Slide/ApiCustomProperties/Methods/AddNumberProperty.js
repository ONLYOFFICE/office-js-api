// This example demonstrates how to add a number custom property to a document.

const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();

customProps.AddNumberProperty("Value_1", 3);
customProps.AddNumberProperty("Value_2", 3.0);
customProps.AddNumberProperty("Value_3", 3.14);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Value 1: " + customProps.GetPropertyValueByName("Value_1"));
paragraph.AddText("\nValue 2: " + customProps.GetPropertyValueByName("Value_2"));
paragraph.AddText("\nValue 3: " + customProps.GetPropertyValueByName("Value_3"));
