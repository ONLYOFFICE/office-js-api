// This example shows how to get an array of words from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('First sentence with several words. Second sentence here.');

paragraph.Select();

const selection = doc.GetSelection();
const words = selection.GetWords();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of words in selection: ' + words.length);
doc.Push(paragraph);

for (let i = 0; i < words.length; i++) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText('Word ' + (i + 1) + ': ' + words[i].GetText());
	doc.Push(paragraph);
}
