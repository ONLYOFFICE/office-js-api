// Find out the class type of a color object in a spreadsheet.

// How can I get the class type of a color in a spreadsheet?

// Get the class type of a color and display it in the spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let colorClassType = color.GetClassType();
worksheet.GetRange("A4").SetValue("Class type = " + colorClassType);