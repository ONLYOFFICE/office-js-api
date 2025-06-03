// This example demonstrates how to add a boolean custom property.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

customProps.AddBoolProperty("trueBool", true);
customProps.AddBoolProperty("fakeBool", 1.1);

const trueBool = customProps.GetPropertyValueByName("trueBool");
const fakeBool = customProps.GetPropertyValueByName("fakeBool");

let paragraph = document.GetElement(0);
paragraph.AddText("Originally Boolean: " + trueBool);
paragraph.AddText("\nFake Boolean: " + fakeBool);
