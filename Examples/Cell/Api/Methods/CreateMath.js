// Build a math equation object and insert it into a shape's paragraph like a text run in a spreadsheet.

// How do I insert a formula into a shape as if it were a run of text in a spreadsheet?

// Produce a reusable equation object and place it into a shape's paragraph content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

let paragraph = shape.GetContent().GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
