// Apply Api.Color with every supported input format to style separate paragraphs in a document.

// How do I create colors from byte components, packed integers, HEX strings, theme names, color names, and the auto value in a document?

// Color separate paragraphs with each color produced by Api.Color in a document.

const doc = Api.GetDocument();
const colors = [
    Api.Color(220, 50, 50),
    Api.Color(50, 200, 50, 180),
    Api.Color(0x0066CC),
    Api.Color('#FF6600'),
    Api.Color('#F0A'),
    Api.Color('accent1'),
    Api.Color('red'),
    Api.Color('auto'),
];
const labels = [
    'RGB components',
    'RGBA components',
    'Packed integer',
    'Full HEX',
    'Short HEX',
    'Theme color',
    'Named color',
    'Auto color',
];
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText(labels[0]);
firstParagraph.SetColor(colors[0]);
for (let i = 1; i < colors.length; i++) {
    const paragraph = Api.CreateParagraph();
    paragraph.AddText(labels[i]);
    paragraph.SetColor(colors[i]);
    doc.Push(paragraph);
}
