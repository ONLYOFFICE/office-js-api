// This example sets the vertical alignment of the text in the cell range.

// How to change the vertical alignment of the cell content.

// Change the vertical alignment of the ApiRange content to distributed.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D5");
worksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
range.SetAlignVertical("distributed");