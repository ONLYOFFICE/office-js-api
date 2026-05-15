// Fill a shape with a patterned background using two colors in a document.

// How do I apply a diagonal dash pattern as the background of a shape in a document?

// Give a shape a decorative patterned fill instead of a solid color in a document.

const bgColor = Api.HexColor('#abcdef');
const fgColor = Api.ThemeColor('accent3');
const fill = Api.CreatePatternFill('dashDnDiag', bgColor, fgColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddDrawing(shape);