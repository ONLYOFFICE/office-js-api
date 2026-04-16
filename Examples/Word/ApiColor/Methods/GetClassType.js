// Retrieve the class type of a color in a document.

// How to identify the class type of a color in a document?

// Obtain the class type identifier of a color object in a document.

const doc = Api.GetDocument();
const color = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Class type of ApiColor instance: ' + color.GetClassType());