// Append text to the end of a shape's content in a PDF.

// How do I add text to the last paragraph of a shape's document content in a PDF?

// Add a sentence to a shape without replacing its existing text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
docContent.GetElement(0).AddText('First sentence.');
docContent.AddText(' Appended sentence.');
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText('Text from document content: ' + docContent.GetText());
docContent.Push(infoParagraph);
page.AddObject(shape);
