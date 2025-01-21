// This example shows how to get all styles of the current document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("Document styles:");
paragraph.SetBold(true);
let styles = document.GetAllStyles();
for (let i = 0; i < styles.length; i++) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText(styles[i].GetName());
	document.AddElement(i + 1, paragraph);
}