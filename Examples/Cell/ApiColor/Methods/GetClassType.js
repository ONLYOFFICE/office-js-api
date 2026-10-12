// Check the class label reported by a color object built for a spreadsheet.

// How do I confirm the type name of a color object before passing it on in a spreadsheet?

// Apply a color to a cell and write the class type reported by that color into another cell.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
worksheet.GetRange("A4").SetValue("Class type = " + color.GetClassType());