// This example demonstrates how to add a boolean custom property.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();

customProps.AddBoolProperty("trueBool", true);
customProps.AddBoolProperty("fakeBool", 1.1);

const trueBool = customProps.GetPropertyValueByName("trueBool");
const fakeBool = customProps.GetPropertyValueByName("fakeBool");

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 50 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Originally Boolean: " + trueBool);
paragraph.AddText("\nFake Boolean: " + fakeBool);
