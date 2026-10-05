// Add an equation at the current text cursor position in a spreadsheet.

// Insert a new equation into the text currently being edited, or, if nothing is being edited, into a new text art object created next to the active cell.

// Add an equation directly to the active sheet without setting up a shape or paragraph first.

let worksheet = Api.GetActiveSheet();
let math = worksheet.GetMaths().Add("x^2 + y^2 = z^2", "unicode");
