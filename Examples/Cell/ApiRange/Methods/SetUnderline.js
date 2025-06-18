// This example specifies that the contents of the current cell is displayed along with a line appearing directly below the character.

// How to add underline to the cell value.

// Get a range and add underline to its text.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The text underlined with a single line");
worksheet.GetRange("A2").SetUnderline("single");
worksheet.GetRange("A4").SetValue("Normal text");