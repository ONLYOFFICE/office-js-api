// Apply Api.Color with every supported input format to fill separate shapes on a PDF page.

// How do I create colors from byte components, packed integers, HEX strings, theme names, and color names in a PDF?

// Place separate shapes filled with each color produced by Api.Color on the first page of the PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const colors = [
    Api.Color(220, 50, 50),
    Api.Color(50, 200, 50, 180),
    Api.Color(0x0066CC),
    Api.Color('#FF6600'),
    Api.Color('#F0A'),
    Api.Color('accent1'),
    Api.Color('blue'),
];
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
for (let idx = 0; idx < colors.length; idx++) {
    const fill = Api.CreateSolidFill(colors[idx]);
    const shape = Api.CreateShape("rect", 70 * 36000, 35 * 36000, fill, stroke);
    shape.SetPosition(608400, (1 + idx) * 36000 * 12);
    page.AddObject(shape);
}
