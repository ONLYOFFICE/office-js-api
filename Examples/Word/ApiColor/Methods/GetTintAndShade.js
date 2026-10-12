// Read the luminance shift stored in a theme color in a document.

// A theme color may be lightened or darkened; the shift is kept next to the theme name.

// Write the shift and the resulting color of a lightened accent into the document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const lighter = Api.ThemeColor("accent1", 0.4);
paragraph.AddText("Tint: " + lighter.GetTintAndShade() + ", color: " + lighter.GetHex());
paragraph.AddLineBreak();

const plain = Api.ThemeColor("accent1");
paragraph.AddText("Without a shift: " + plain.GetTintAndShade() + ", color: " + plain.GetHex());