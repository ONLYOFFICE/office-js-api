// This example sets the bold property to the text characters in the current cell or cell range.

// How to change the font style properties of a range making it bold.

// Make characters of the ApiRange object bold.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Bold text");
worksheet.GetRange("A2").SetBold(true);
worksheet.GetRange("A3").SetValue("Normal text");