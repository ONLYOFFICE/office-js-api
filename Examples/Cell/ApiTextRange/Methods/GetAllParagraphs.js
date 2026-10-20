// Take every paragraph covered by a text range in a shape on a worksheet.

// Lets a single range be processed paragraph by paragraph.

// Make the first of the covered paragraphs bold.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
docContent.GetElement(0).AddText("First paragraph");
let secondPara = Api.CreateParagraph();
secondPara.AddText("Second paragraph");
docContent.Push(secondPara);
let thirdPara = Api.CreateParagraph();
thirdPara.AddText("Third paragraph");
docContent.Push(thirdPara);

let range = shape.GetTextRange();

let paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold(true);

worksheet.GetRange("A1").SetValue("GetAllParagraphs: " + paragraphs.length);