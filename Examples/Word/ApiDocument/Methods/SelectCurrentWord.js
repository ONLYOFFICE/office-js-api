// Select the word under the cursor and read the selected text in a document.

// How do I programmatically select a word at a given cursor position in a document?

// Move the cursor to a character offset and capture the whole word it lands on in a document.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
let run = para1.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);

doc.SelectCurrentWord();

let para2 = Api.CreateParagraph();
para2.AddText("The selected text is " + doc.GetRangeBySelect().GetText());
doc.Push(para2);