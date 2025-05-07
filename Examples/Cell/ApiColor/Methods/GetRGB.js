// This example gets an RGB format of a color and inserts it into the table.

// How to get a RGB color format.

// Convert a color to the RGB values.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let rgbColor = color.GetRGB();
worksheet.GetRange("A4").SetValue("Cell color in RGB format: " + rgbColor);