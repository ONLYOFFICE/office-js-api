// This example demonstrates how to add string custom properties.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();

customProps.AddStringProperty("CompanyName", "ONLYOFFICE");
customProps.AddStringProperty("WillBeStringAnyways_1", true);
customProps.AddStringProperty("WillBeStringAnyways_2", 123.456);

const companyName = customProps.GetPropertyValueByName("CompanyName");
const stringFromBool = customProps.GetPropertyValueByName("WillBeStringAnyways_1");
const stringFromNumber = customProps.GetPropertyValueByName("WillBeStringAnyways_2");
const areAllValuesString = (typeof companyName === "string") && (typeof stringFromBool === "string") && (typeof stringFromNumber === "string");

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 50 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Company Name: " + customProps.GetPropertyValueByName("CompanyName"));
paragraph.AddText("\nWillBeStringAnyways_1: " + customProps.GetPropertyValueByName("WillBeStringAnyways_1"));
paragraph.AddText("\nWillBeStringAnyways_2: " + customProps.GetPropertyValueByName("WillBeStringAnyways_2"));
paragraph.AddText("\nAll values are strings? " + areAllValuesString);
