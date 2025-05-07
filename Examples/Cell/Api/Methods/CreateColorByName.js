// This example creates a color selecting it from one of the available color presets.

// How to use a color from the preset.

// Find a color by name and use it to change font color

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorByName("peachPuff");
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);