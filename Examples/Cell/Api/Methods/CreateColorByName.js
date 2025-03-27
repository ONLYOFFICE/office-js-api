// This example creates a color selecting it from one of the available color presets.
let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorByName("peachPuff");
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);