// Insert an equation created separately at the current text cursor position in a spreadsheet.

// The equation built with Api.CreateMath appears in the shape only after it is pushed to the equations collection of the sheet.

// Create an equation, insert it after the text of a shape, then report the text of the inserted equation.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 100 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let docContent = shape.GetContent();
docContent.GetElement(0).AddText("Pythagorean theorem: ");
shape.GetTextRange().Select();
worksheet.MoveCursorRight();
let math = Api.CreateMath("a^2 + b^2 = c^2", "unicode");
let insertedMath = worksheet.GetMaths().Push(math);
let report = Api.CreateParagraph();
report.AddText("Inserted equation: " + insertedMath.GetText());
docContent.Push(report);
