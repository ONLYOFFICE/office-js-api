// Apply Api.Color with every supported input format to fill separate shapes on a worksheet.

// How do I create colors from byte components, packed integers, HEX strings, theme names, and color names in a spreadsheet?

// Place separate shapes filled with each color produced by Api.Color on the worksheet.

const worksheet = Api.GetActiveSheet();
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
    worksheet.AddShape("rect", 60 * 36000, 30 * 36000, fill, stroke, 0, idx * 2 * 36000, 0, 36000);
}
