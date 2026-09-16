// Add text to a drawing on a worksheet that has no text body yet.

// The text body is created on demand, and the returned range covers it entirely.

// Create the text body of the drawing and fill it through the returned range.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let range = shape.CreateTextRange();
range.AddText("Hello World");