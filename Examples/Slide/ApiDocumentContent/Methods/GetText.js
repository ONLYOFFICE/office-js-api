// Extract all text from a shape's content in a presentation.

// How do I get all the text inside a shape in a presentation?

// Retrieve the combined text content from a shape and display it on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is the shape content text.');
const text = docContent.GetText();
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText('Text from document content: ' + text);
docContent.Push(infoParagraph);
slide.AddObject(shape);