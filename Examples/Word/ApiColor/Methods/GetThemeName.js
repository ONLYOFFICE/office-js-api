// Get the theme color name of an color object in a document.

// How do I get the theme name in a document?

// Get the theme name using a color object in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const hexColor = Api.HexColor('#4080DE');
const themeColor = Api.ThemeColor('accent1');

paragraph.AddText('Theme name of hexColor: ' + hexColor.GetThemeName());
paragraph.AddLineBreak();
paragraph.AddText('Theme name of themeColor: ' + themeColor.GetThemeName());