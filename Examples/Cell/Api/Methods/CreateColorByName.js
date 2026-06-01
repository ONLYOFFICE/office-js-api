// Pick a color from a built-in preset list to use on text or objects in a spreadsheet.

// How do I select a named color preset to apply to an element in a spreadsheet?

// Style text with a predefined color chosen by its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorByName("peachPuff");
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);