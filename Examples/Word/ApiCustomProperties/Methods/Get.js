// This example demonstrates how to get the value of a custom property by its name.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

customProps.Add("ExistingProp", "#123456");

const existingProp = customProps.Get("ExistingProp");
const nonExistentProp = customProps.Get("NonExistentProp");

const paragraph = document.GetElement(0);
paragraph.AddText("Existing Property Value: " + existingProp);
paragraph.AddText("\nNon-Existent Property Value: " + nonExistentProp);
