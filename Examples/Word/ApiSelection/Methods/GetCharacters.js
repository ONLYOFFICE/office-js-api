// This example shows how to get an array of characters from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Hello World!');
paragraph.Select();

const selection = doc.GetSelection();
const characters = selection.GetCharacters();
for (let i = 0; i < characters.length; i += 2) {
	characters[i].SetBold(true);
}

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of characters in selection: ' + characters.length);
doc.Push(paragraph);
