// Replace the content of a text range with an equation in a spreadsheet.

// The range must be an ApiTextRange obtained from a shape's own text, and the equation source text is given explicitly.

// Replace a placeholder text range in a shape with an equation built from an explicit formula.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("PLACEHOLDER");

let range = shape.GetTextRange().GetRange(0, "PLACEHOLDER".length);
let math = worksheet.GetMaths().ReplaceRange(range, "y^2", "unicode");
