// This example demonstrates how to get the value of a custom property by its name.

const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();

customProps.AddStringProperty("ExistingProp", "#123456");

const existingProp = customProps.GetPropertyValueByName("ExistingProp");
const nonExistentProp = customProps.GetPropertyValueByName("NonExistentProp");

const fill = Api.CreateSolidFill(Api.CreateRGBColor(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Existing Property Value: " + existingProp);
paragraph.AddText("\nNon-Existent Property Value: " + nonExistentProp);
