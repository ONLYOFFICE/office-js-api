// Place a new paragraph next to an existing paragraph in a PDF.

// How do I add a paragraph at a specific location relative to another paragraph in a PDF?

// Position a paragraph before or after an existing one in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This paragraph was inserted after the first one.');
paragraph.InsertParagraph(paragraph2, 'after', true);
page.AddObject(shape);