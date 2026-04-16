// Check if the color is an auto color in a document.

// How to is auto color for a color in a document?

// Is auto color and display the result in a document.

const doc = Api.GetDocument();
const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('Is themeColor an auto color? ' + themeColor.IsAutoColor());
paragraph.AddLineBreak();
paragraph.AddText('Is autoColor an auto color? ' + autoColor.IsAutoColor());