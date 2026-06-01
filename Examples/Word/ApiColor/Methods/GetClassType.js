// Retrieve the class type of a color object in a document.

// How do I identify what kind of color object is used in a document?

// Useful when you need to confirm the object type before processing color properties.

const doc = Api.GetDocument();
const color = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Class type of ApiColor instance: ' + color.GetClassType());