// Check the class type returned by a color in a spreadsheet.

// How do I check what type a color object is in a spreadsheet?

// Retrieve and output the class type string for a color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let colorClassType = color.GetClassType();
worksheet.GetRange("A4").SetValue("Class type = " + colorClassType);