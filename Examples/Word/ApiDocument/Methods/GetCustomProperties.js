// This example demonstrates how to use ApiCustomProperties to configure custom properties in a document.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

customProps.AddStringProperty("MyStringProperty", "Hello, World!");
customProps.AddNumberProperty("MyNumberProperty", 42);
customProps.AddDateProperty("MyDateProperty", new Date("23 November 2023"));
customProps.AddBoolProperty("MyBoolProperty", true);

const stringValue = customProps.GetPropertyValueByName("MyStringProperty");
const numberValue = customProps.GetPropertyValueByName("MyNumberProperty");
const dateValue = customProps.GetPropertyValueByName("MyDateProperty");
const boolValue = customProps.GetPropertyValueByName("MyBoolProperty");

let paragraph = document.GetElement(0);
paragraph.AddText("Custom String Property: " + stringValue);
paragraph.AddText("\nCustom Number Property: " + numberValue);
paragraph.AddText("\nCustom Date Property: " + dateValue.toDateString());
paragraph.AddText("\nCustom Boolean Property: " + boolValue);
