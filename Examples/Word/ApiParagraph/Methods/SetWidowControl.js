// This example specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page.

// Set the window control of the paragraph.

// Make the last line to be displayed on the next page, by setting widow control method set to 'true'.

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