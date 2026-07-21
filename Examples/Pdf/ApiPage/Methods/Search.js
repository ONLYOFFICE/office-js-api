// Find and locate all instances of a word on a page in a PDF.

// Useful for searching for text on a page in a PDF.

// Look up a specific word and identify all matching locations in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
let fill = Api.CreateSolidFill(Api.RGB(255, 255, 255));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Lorem selected text");
page.AddObject(shape);

let quads = page.Search({text: "Lorem", matchCase: false, wholeWords: false});
if (quads.length > 0) {
	let annot = Api.CreateHighlightAnnot(quads);
	page.AddObject(annot);
}
console.log('We added a highlight annotations searched word');
