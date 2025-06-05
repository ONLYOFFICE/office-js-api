// This example demonstrates how to use ApiCustomProperties to configure custom properties in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const customProps = presentation.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, World!");
customProps.Add("MyNumberProperty", 42);
customProps.Add("MyDateProperty", new Date("2023-11-23"));
customProps.Add("MyBoolProperty", true);

let stringValue = customProps.Get("MyStringProperty");
let numberValue = customProps.Get("MyNumberProperty");
let dateValue = customProps.Get("MyDateProperty");
let boolValue = customProps.Get("MyBoolProperty");

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 100 * 36000, fill, stroke);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);

paragraph.AddText("Custom String Property: " + stringValue + "\n");
paragraph.AddText("Custom Number Property: " + numberValue + "\n");
paragraph.AddText("Custom Date Property: " + dateValue.toDateString() + "\n");
paragraph.AddText("Custom Boolean Property: " + boolValue);

slide.AddObject(shape);
