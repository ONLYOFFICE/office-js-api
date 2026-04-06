// This example shows how to create a color in RGB format and use it as a shape fill.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(186, 218, 85);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
