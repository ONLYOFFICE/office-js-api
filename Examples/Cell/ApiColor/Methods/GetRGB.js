// Extract the red, green, and blue components of a color in a spreadsheet.

// How do I read the individual RGB channel values of a color object in a spreadsheet?

// Break down a color into its numeric channel values and write the result to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let rgbColor = color.GetRGB();
worksheet.GetRange("A4").SetValue("Cell color in RGB format: " + rgbColor);