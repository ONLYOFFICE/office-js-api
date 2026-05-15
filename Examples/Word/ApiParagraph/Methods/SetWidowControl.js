// Prevent a lone paragraph line from being left behind on a page by itself in a document.

// How do I keep orphaned or widowed lines of a paragraph from appearing alone on a page in a document?

// Ensure paragraph lines always flow together so no single line strays to an isolated page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The single line of the last paragraph on this page will be prevented from being displayed on a separate page. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
for (let i = 0; i < 4; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetWidowControl(true);
paragraph.AddText("This last line is displayed on the next page, because we used the set widow control method set to 'true'.");
doc.Push(paragraph);