// This example shows how to get all styles of the current document.

// Get all styles added to the document.

// How to retrieve all styles and display their names.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document styles:");
paragraph.SetBold(true);
let styles = doc.GetAllStyles();
for (let i = 0; i < styles.length; i++) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText(styles[i].GetName());
	doc.AddElement(i + 1, paragraph);
}