// Use a theme accent color as the background fill for a shape in a spreadsheet.

// How do I fill a shape with one of the document's built-in theme colors in a spreadsheet?

// Draw a rectangle filled with a coordinated theme color to maintain consistent styling in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.ThemeColor('accent6');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);