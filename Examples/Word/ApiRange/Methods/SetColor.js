// Change the color of a range of text in a document.

// How do I apply a specific color to a portion of text in a document?

// Give selected words a distinct color to draw attention to them in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('ONLYOFFICE Document Builder');

const companyRange = doc.GetRange(1, 11);
companyRange.SetColor(Api.HexColor('#FF6F3D'));

const productRange = doc.GetRange(12, 30);
const themeColor = Api.ThemeColor('accent1');
productRange.SetColor(themeColor);