// This example demonstrates how to add a boolean custom property.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();

customProps.AddProperty("CompanyName", "ONLYOFFICE");
const companyName = customProps.GetPropertyValueByName("CompanyName");

customProps.AddProperty("TrueBool", true);
const trueBool = customProps.GetPropertyValueByName("TrueBool");

customProps.AddProperty("NumberInt", 3.0);
customProps.AddProperty("NumberReal", 3.14);
const numberInt = customProps.GetPropertyValueByName("NumberInt")
const numberReal = customProps.GetPropertyValueByName("NumberReal")

customProps.AddProperty("BirthDate", new Date("20 January 2000"));
const birthDate = customProps.GetPropertyValueByName("BirthDate");
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let paragraph = shape.GetDocContent().GetElement(0);

paragraph.AddText("CompanyName: " + companyName);
paragraph.AddLineBreak();

paragraph.AddText("\nTrueBool: " + trueBool);
paragraph.AddLineBreak();

paragraph.AddText("\nNumberInt: " + numberInt);
paragraph.AddText("\nNumberReal: " + numberReal);
paragraph.AddLineBreak();

paragraph.AddText("\nBirthDate: " + birthDate.toDateString());
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);
