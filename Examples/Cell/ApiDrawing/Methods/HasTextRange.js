// Check whether a drawing on a worksheet can carry text before working with it.

// Images and tables have no text body, so the check tells a text drawing from the others.

// Write the answer into cells before and after the text body is created.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

worksheet.GetRange("A1").SetValue("before: " + shape.HasTextRange());

shape.CreateTextRange().SetText("Sample");

worksheet.GetRange("A2").SetValue("after: " + shape.HasTextRange());
