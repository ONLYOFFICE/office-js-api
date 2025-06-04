// This example demonstrates how to add a date custom property.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();

customProps.AddDateProperty("BirthDate", new Date("20 January 2000"));

const birthDate = customProps.GetPropertyValueByName("BirthDate");
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 50 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Birth Date: " + birthDate.toDateString());
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);
