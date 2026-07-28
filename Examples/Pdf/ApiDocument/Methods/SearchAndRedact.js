// Find and hide sensitive text in a PDF.

// Useful for blacking out certain words throughout a PDF.

// Search for a word and apply redaction to all matches in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let fill = Api.CreateSolidFill(Api.RGB(50, 150, 250));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(10 * 12700, 10 * 12700);
let paragraph = shape.GetContent().GetElement(0);
paragraph.SetJc("left");
let searchText = "ApiDocument SearchAndRedact sensitive text";
paragraph.AddText(searchText);
page.AddObject(shape);

doc.SearchAndRedact({text: searchText, matchCase: true, wholeWords: false});
doc.ApplyRedact();
console.log(`We searched for the added text in the document and applied redact annotation to all matches.`);
