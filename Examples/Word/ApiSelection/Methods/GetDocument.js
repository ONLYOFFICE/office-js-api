// This example shows how to get selection's parent document

const doc = Api.GetDocument();
const selection = doc.GetSelection();
const paragraph = doc.GetElement(0);

const isEqual = doc === selection.GetDocument();
paragraph.AddText("Is selection's document equal to the document? " + isEqual);
