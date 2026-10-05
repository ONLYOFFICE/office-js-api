// Move the text cursor up in the text being edited in a spreadsheet.

// The cursor moves only while the text of a drawing is being edited, otherwise the method returns false.

// Place the cursor at the end of the shape text, move it up to the empty first line, then insert an equation there.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 100 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let docContent = shape.GetContent();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Circle area");
docContent.Push(paragraph);
shape.GetTextRange().Select();
worksheet.MoveCursorRight();
worksheet.MoveCursorUp();
worksheet.GetMaths().Add("\\pi r^2", "latex");
