// Create a color selecting it from one of the available color presets in a spreadsheet.

// How to use a color from the preset in a spreadsheet.

// Find a color by name and use it to change font color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorByName("peachPuff");
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);