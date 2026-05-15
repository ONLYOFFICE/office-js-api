// Retrieve the theme color name from a color object in a document.

// How do I find out which theme slot a color belongs to in a document?

// Distinguish between a color defined by a hex value and one tied to a named theme slot in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const hexColor = Api.HexColor('#4080DE');
const themeColor = Api.ThemeColor('accent1');

paragraph.AddText('Theme name of hexColor: ' + hexColor.GetThemeName());
paragraph.AddLineBreak();
paragraph.AddText('Theme name of themeColor: ' + themeColor.GetThemeName());