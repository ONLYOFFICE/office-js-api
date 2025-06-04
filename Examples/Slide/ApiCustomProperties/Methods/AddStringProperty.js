// This example demonstrates how to add string custom properties to a document.

const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();

customProps.AddStringProperty("CompanyName", "ONLYOFFICE");
customProps.AddStringProperty("WillBeStringAnyways_1", true);
customProps.AddStringProperty("WillBeStringAnyways_2", 123.456);

const companyName = customProps.GetPropertyValueByName("CompanyName");
const stringFromBool = customProps.GetPropertyValueByName("WillBeStringAnyways_1");
const stringFromNumber = customProps.GetPropertyValueByName("WillBeStringAnyways_2");
const areAllValuesString = (typeof companyName === "string") && (typeof stringFromBool === "string") && (typeof stringFromNumber === "string");

const fill = Api.CreateSolidFill(Api.CreateRGBColor(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Company Name: " + customProps.GetPropertyValueByName("CompanyName"));
paragraph.AddText("\nWillBeStringAnyways_1: " + customProps.GetPropertyValueByName("WillBeStringAnyways_1"));
paragraph.AddText("\nWillBeStringAnyways_2: " + customProps.GetPropertyValueByName("WillBeStringAnyways_2"));
paragraph.AddText("\nAll values are strings? " + areAllValuesString);
