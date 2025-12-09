// This example sets the text color to the text Range.

// How to color the text of the range.

// Set the text color to middle washed rose.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('ONLYOFFICE Document Builder');

const companyRange = doc.GetRange(1, 11);
companyRange.SetColor(255, 111, 61);

const productRange = doc.GetRange(12, 30);
const themeColor = Api.ThemeColor('accent1');
productRange.SetColor(themeColor);
