// Identify the object type of a math equation in a spreadsheet.

// Find out what kind of object a formula is in a spreadsheet.

// Confirm the category a math equation belongs to in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
let classType = math.GetClassType();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Class Type = " + classType);
docContent.Push(paragraph2);
