// Check what type of object manages custom properties in a spreadsheet.

// How do I confirm the category of the custom properties container in a spreadsheet?

// Verify the identity of the metadata handler before working with custom fields in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();
const classType = customProps.GetClassType();

let fill = Api.CreateSolidFill(Api.RGB(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 100 * 36000, 50 * 36000, fill, stroke, 0, 0, 5, 0);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);