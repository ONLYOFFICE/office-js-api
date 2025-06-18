// This example sets the horizontal alignment of the text in the cell range.

// How to change the horizontal alignment of the cell content.

// Change the horizontal alignment of the ApiRange content to center.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");