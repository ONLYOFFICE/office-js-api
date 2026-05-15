// Retrieve the class type of a color object in a spreadsheet.

// How do I find out what class type a color object belongs to in a spreadsheet?

// Identify whether a color belongs to a specific class by reading its type label in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let colorClassType = color.GetClassType();
worksheet.GetRange("A4").SetValue("Class type = " + colorClassType);