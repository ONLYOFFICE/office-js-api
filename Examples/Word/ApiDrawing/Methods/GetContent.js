// Get the inner content of a drawing object to add text inside it in a document.

// How do I access the editable content area inside a drawing shape in a document?

// Insert a paragraph with custom text directly into a shape's content container in a document.

const doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const drawing = Api.CreateShape("rect", 100 * 36000, 20 * 36000, fill, stroke);
firstParagraph.AddDrawing(drawing);

const docContent = drawing.GetContent();

const shapeParagraph = Api.CreateParagraph();
shapeParagraph.AddText('This is the text added to the paragraph inside the drawing using the GetContent method.');
docContent.AddElement(0, shapeParagraph);