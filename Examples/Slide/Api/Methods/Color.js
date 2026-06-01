// Apply Api.Color with every supported input format to fill separate shapes on a slide.

// How do I create colors from byte components, packed integers, HEX strings, theme names, and color names in a presentation?

// Render separate shapes filled with each color produced by Api.Color on the first slide of the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

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
    slide.AddObject(shape);
}
