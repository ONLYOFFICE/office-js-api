// This example creates a pattern fill and applies it to the object using the selected pattern as the object background.

// Creates the ApiFill object using the "dashDnDiag" pattern type and applies it to the created shape.

// How to create a pattern fill for the ApiShape object background.

const bgColor = Api.HexColor('#abcdef');
const fgColor = Api.ThemeColor('accent3');
const fill = Api.CreatePatternFill('dashDnDiag', bgColor, fgColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddDrawing(shape);
