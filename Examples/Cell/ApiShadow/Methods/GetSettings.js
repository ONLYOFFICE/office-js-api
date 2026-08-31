// Read the settings of a shadow applied to a drawing in a spreadsheet.

// Retrieve the shadow object and inspect its transparency, offset and size.

// Set a shadow, read its settings with GetSettings, and print the values inside the shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 160 * 36000, 80 * 36000, fill, stroke, 2, 0, 2, 0);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.5, offsetX: 3, offsetY: 3 }));
const settings = shape.GetShadow().GetSettings();
shape.GetContent().GetElement(0).AddText("Shadow transparency " + settings.transparency + ", offset " + Math.round(settings.offsetX) + " x " + Math.round(settings.offsetY) + ", size " + settings.size + "%");