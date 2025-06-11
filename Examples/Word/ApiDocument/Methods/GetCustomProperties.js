// This example demonstrates how to use ApiCustomProperties to configure custom properties in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

customProps.Add("MyStringProperty", "Hello, World!");
customProps.Add("MyNumberProperty", 42);
customProps.Add("MyDateProperty", new Date("23 November 2023"));
customProps.Add("MyBoolProperty", true);

const stringValue = customProps.Get("MyStringProperty");
const numberValue = customProps.Get("MyNumberProperty");
const dateValue = customProps.Get("MyDateProperty");
const boolValue = customProps.Get("MyBoolProperty");

let paragraph = doc.GetElement(0);
paragraph.AddText("Custom String Property: " + stringValue);
paragraph.AddText("\nCustom Number Property: " + numberValue);
paragraph.AddText("\nCustom Date Property: " + dateValue.toDateString());
paragraph.AddText("\nCustom Boolean Property: " + boolValue);
