// This example demonstrates how to get the value of a custom property by its name.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

customProps.AddProperty("ExistingProp", "#123456");

const existingProp = customProps.GetPropertyValueByName("ExistingProp");
const nonExistentProp = customProps.GetPropertyValueByName("NonExistentProp");

const paragraph = document.GetElement(0);
paragraph.AddText("Existing Property Value: " + existingProp);
paragraph.AddText("\nNon-Existent Property Value: " + nonExistentProp);
