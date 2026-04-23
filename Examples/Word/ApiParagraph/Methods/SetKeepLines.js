// Prevent a paragraph from being split across two pages in a document.

// How do I keep all lines of a paragraph together on the same page in a document?

// Force a paragraph to stay on one page instead of breaking across pages in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep lines together. ");
paragraph.AddText("Scroll down to the second page to see it.");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines are moved to the next page to keep them together. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetKeepLines(true);
doc.Push(paragraph);