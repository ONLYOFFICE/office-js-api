// This example specifies whether a single line of the current paragraph will be displayed on a separate page from the remaining content at display time by moving the line onto the following page.
let document = Api.GetDocument();
let myStyle = document.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetWidowControl(true);
let paragraph = document.GetElement(0);
paragraph.AddText("The single line of the last paragraph on this page will be prevented from being displayed on a separate page. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	document.Push(paragraph);
}
paragraph = Api.CreateParagraph();
for (let i = 0; i < 3; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetStyle(myStyle);
paragraph.AddText("This last line would be displayed on the next page, if we had not used the set widow control method.");
document.Push(paragraph);