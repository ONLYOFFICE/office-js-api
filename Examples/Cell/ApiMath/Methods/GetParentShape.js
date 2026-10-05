// Access the shape that contains a math equation in a spreadsheet.

// A new equation is placed into a text art object next to the active cell, and its shape can be adjusted right after adding.

// Add an equation to the active sheet and move the shape that contains it.

let worksheet = Api.GetActiveSheet();
let math = worksheet.GetMaths().Add("a^2 + b^2 = c^2", "unicode");
let shape = math.GetParentShape();
shape.SetPosition(2, 0, 4, 0);
