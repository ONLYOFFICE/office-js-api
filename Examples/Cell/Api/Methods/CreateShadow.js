// Create a shadow and apply it to a shape in a spreadsheet.

// Build an outer shadow with a color, transparency and offset, then attach it to a drawing.

// Create a shape, create the shadow via Api.CreateShadow, and apply it with SetShadow.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 120 * 36000, 60 * 36000, fill, stroke, 2, 0, 2, 0);
const shadow = Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 });
shape.SetShadow(shadow);