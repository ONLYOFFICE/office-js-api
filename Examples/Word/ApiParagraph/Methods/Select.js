// Select the paragraph in a document.

// How to select the paragraph in a document.

// Select a paragraph with a cursor in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let result = paragraph.Select();
if (result === true) {
	paragraph.SetItalic(true);
}