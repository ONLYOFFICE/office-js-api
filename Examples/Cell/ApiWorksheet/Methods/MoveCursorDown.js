// Move the text cursor down in the text being edited in a spreadsheet.

// The cursor moves only while the text of a drawing is being edited, otherwise the method returns false.

// Place the cursor at the start of the shape text, move it down to the empty second line, then insert an equation there.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 100 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let docContent = shape.GetContent();
docContent.GetElement(0).AddText("Circle area:");
docContent.Push(Api.CreateParagraph());
shape.GetTextRange().Select();
worksheet.MoveCursorLeft();
worksheet.MoveCursorDown();
worksheet.GetMaths().Add("\\pi r^2", "latex");
