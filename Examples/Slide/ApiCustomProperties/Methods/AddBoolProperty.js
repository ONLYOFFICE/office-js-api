// This example demonstrates how to add a boolean custom property.

const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();

customProps.AddBoolProperty("trueBool", true);
customProps.AddBoolProperty("fakeBool", 1.1);

const trueBool = customProps.GetPropertyValueByName("trueBool");
const fakeBool = customProps.GetPropertyValueByName("fakeBool");

const fill = Api.CreateSolidFill(Api.CreateRGBColor(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Originally Boolean: " + trueBool);
paragraph.AddText("\nFake Boolean: " + fakeBool);
