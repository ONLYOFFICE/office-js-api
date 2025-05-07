// This example creates an RGB color setting the appropriate values for the red, green and blue color components.

// How to create color using RGB values.

// Use RGB color to change object colors.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);