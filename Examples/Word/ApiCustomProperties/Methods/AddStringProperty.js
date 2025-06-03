// This example demonstrates how to add string custom properties to a document.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

customProps.AddStringProperty("CompanyName", "ONLYOFFICE");
customProps.AddStringProperty("WillBeStringAnyways_1", true);
customProps.AddStringProperty("WillBeStringAnyways_2", 123.456);

const companyName = customProps.GetPropertyValueByName("CompanyName");
const stringFromBool = customProps.GetPropertyValueByName("WillBeStringAnyways_1");
const stringFromNumber = customProps.GetPropertyValueByName("WillBeStringAnyways_2");
const areAllValuesString = (typeof companyName === "string") && (typeof stringFromBool === "string") && (typeof stringFromNumber === "string");

const paragraph = document.GetElement(0);
paragraph.AddText("Company Name: " + customProps.GetPropertyValueByName("CompanyName"));
paragraph.AddText("\nWillBeStringAnyways_1: " + customProps.GetPropertyValueByName("WillBeStringAnyways_1"));
paragraph.AddText("\nWillBeStringAnyways_2: " + customProps.GetPropertyValueByName("WillBeStringAnyways_2"));
paragraph.AddText("\nAll values are strings? " + areAllValuesString);
