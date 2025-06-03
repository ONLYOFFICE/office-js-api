// This example demonstrates how to add a number custom property to a document.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

customProps.AddNumberProperty("Value_1", 3);
customProps.AddNumberProperty("Value_2", 3.0);
customProps.AddNumberProperty("Value_3", 3.14);

let paragraph = document.GetElement(0);
paragraph.AddText("Value 1: " + customProps.GetPropertyValueByName("Value_1"));
paragraph.AddText("\nValue 2: " + customProps.GetPropertyValueByName("Value_2"));
paragraph.AddText("\nValue 3: " + customProps.GetPropertyValueByName("Value_3"));
