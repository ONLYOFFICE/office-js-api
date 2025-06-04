// This example demonstrates how to add a number custom property.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();

customProps.AddNumberProperty("Value_1", 3);
customProps.AddNumberProperty("Value_2", 3.0);
customProps.AddNumberProperty("Value_3", 3.14);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 50 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Value 1: " + customProps.GetPropertyValueByName("Value_1"));
paragraph.AddText("\nValue 2: " + customProps.GetPropertyValueByName("Value_2"));
paragraph.AddText("\nValue 3: " + customProps.GetPropertyValueByName("Value_3"));
