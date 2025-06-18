// This example demonstrates how to get the class type of ApiCustomProperties.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();
const classType = customProps.GetClassType();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 100 * 36000, 50 * 36000, fill, stroke, 0, 0, 5, 0);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);
