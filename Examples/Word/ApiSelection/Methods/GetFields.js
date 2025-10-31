// This example shows how to get an array of fields from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Page field here: PAGE. Time field here: TIME.');

const words = paragraph.GetWords();

let range1 = words[3].GetRange();
range1.SetBold(true);
range1.AddField('PAGE');

let range2 = words[7].GetRange();
range2.SetBold(true);
range2.AddField('TIME \\@ "dddd, MMMM d, yyyy"');

paragraph.Select();

const selection = doc.GetSelection();
const fields = selection.GetFields();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of fields in selection: ' + fields.length);
doc.Push(paragraph);
