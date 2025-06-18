// This example selects the paragraph.

// How to select the paragraph.

// Select a paragraph with a cursor.

let doc = editor.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let result = paragraph.Select();
if (result === true) {
	paragraph.SetItalic(true);
}