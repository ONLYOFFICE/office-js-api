// Prevent a lone paragraph line from appearing on a separate page in a document.

// How do I keep the last line of a paragraph from being stranded on the next page in a document?

// Ensure paragraph lines stay together across page breaks for better readability in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetWidowControl(true);
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
for (let i = 0; i < 3; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetStyle(myStyle);
paragraph.AddText("This last line would be displayed on the next page, if we had not used the set widow control method.");
doc.Push(paragraph);