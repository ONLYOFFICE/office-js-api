// This example shows how to check if the color is a theme color.

const doc = Api.GetDocument();
const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Is hexColor a theme color? ' + hexColor.IsThemeColor());
paragraph.AddLineBreak();
paragraph.AddText('Is themeColor a theme color? ' + themeColor.IsThemeColor());
