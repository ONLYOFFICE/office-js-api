// Define a custom color from red, green, and blue values to apply to elements in a spreadsheet.

// How do I build a specific color using red, green, and blue numbers in a spreadsheet?

// Color text or shapes with a precise tone by mixing three numeric channel values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);