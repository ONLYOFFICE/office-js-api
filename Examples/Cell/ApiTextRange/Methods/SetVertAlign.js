// Raise the text of a range above the baseline in a shape on a worksheet.

// Superscript and subscript are both set through this method.

// Turn the trailing digit into a superscript.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc2");

let range = shape.GetTextRange();

range.GetRange(4, 5).SetVertAlign("superscript");