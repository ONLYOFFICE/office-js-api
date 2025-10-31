// This example shows how to get a class type of ApiSelection instance and insert it into the document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const selection = doc.GetSelection();

const classType = selection.GetClassType();
paragraph.AddText('Class Type = ' + classType);
