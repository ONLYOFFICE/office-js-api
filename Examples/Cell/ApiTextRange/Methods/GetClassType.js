// Read the class type of a text range in a shape on a worksheet.

// Confirms the object type before calling the range methods on it.

// Read the class type of a range covering the whole text.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let classType = range.GetClassType();

worksheet.GetRange("A1").SetValue("GetClassType: " + classType);