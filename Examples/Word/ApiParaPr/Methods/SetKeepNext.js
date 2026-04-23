// Keep a paragraph on the same page as the paragraph that follows it in a document.

// How do I prevent a paragraph from being separated from the next paragraph in a document?

// Ensure two consecutive paragraphs always appear together when the page breaks.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetKeepNext(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep together with the next paragraph. ");
paragraph.AddText("Scroll down to the second page to see it. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	paragraph.SetStyle(myStyle);
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines stay on the same page as the previous paragraph. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
doc.Push(paragraph);