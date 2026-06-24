// Get text content and its coordinates from a page in a PDF.

// Useful for reading PDF page text together with its location.

// Extract page text lines with quadrilateral coordinates in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
let fill = Api.CreateSolidFill(Api.RGB(255, 255, 255));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let textWithQuads = page.GetTextWithQuads();
textWithQuads.forEach(function(item) {
	console.log(`Text: ${item.text}, quads: ${item.quads}`);
});
