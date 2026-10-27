// Set the spell-check language for a paragraph in a PDF.

// How do I tell the editor which language to use when checking a paragraph of a shape in a PDF?

// Set the language of the paragraph and print it in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#FF6F3D'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is a paragraph with the spell-check language set.');
paragraph.SetLanguage('en-CA');

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Paragraph language: ' + shape.GetTextRange().GetTextPr().GetLanguage());
docContent.Push(resultParagraph);