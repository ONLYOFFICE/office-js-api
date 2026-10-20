// Retrieve the color of a paragraph shading in a document.

// Read back the theme color used for a paragraph shading in a document.

// Shade a paragraph with the accent2 theme color and write the color name into the paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.SetShd(Api.CreateShd('clear', Api.Color('accent2')));
paragraph.AddText('Theme color of the paragraph shading: ' + paragraph.GetShd().GetColor().GetThemeName());