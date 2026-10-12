// Split a spreadsheet color into separate red, green, and blue numbers.

// How do I read each channel of a color as its own value in a spreadsheet?

// Apply a color to a cell, then write its individual channel values into the cells below.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);

const rgb = color.GetRGB();
worksheet.GetRange("A4").SetValue("Red: " + rgb.r);
worksheet.GetRange("A5").SetValue("Green: " + rgb.g);
worksheet.GetRange("A6").SetValue("Blue: " + rgb.b);