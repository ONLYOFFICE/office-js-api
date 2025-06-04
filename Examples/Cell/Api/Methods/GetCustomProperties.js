// This example demonstrates how to use ApiCustomProperties to configure custom properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const customProps = Api.GetCustomProperties();
customProps.AddStringProperty("MyStringProperty", "Hello, Spreadsheet!");
customProps.AddNumberProperty("MyNumberProperty", 123.450);
customProps.AddDateProperty("MyDateProperty", new Date("23 November 2023"));
customProps.AddBoolProperty("MyBoolProperty", true);

let stringValue = customProps.GetPropertyValueByName("MyStringProperty");
let numberValue = customProps.GetPropertyValueByName("MyNumberProperty");
let dateValue = customProps.GetPropertyValueByName("MyDateProperty");
let boolValue = customProps.GetPropertyValueByName("MyBoolProperty");

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 50 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Custom String Property: " + stringValue + "\n");
paragraph.AddText("Custom Number Property: " + numberValue + "\n");
paragraph.AddText("Custom Date Property: " + dateValue.toDateString() + "\n");
paragraph.AddText("Custom Boolean Property: " + boolValue);
