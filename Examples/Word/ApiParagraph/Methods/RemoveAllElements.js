// Clear all content from a paragraph and replace it with new text in a document.

// How do I remove every element from a paragraph in a document?

// Wipe a paragraph clean before inserting fresh content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the first text run in the current paragraph.");
paragraph.AddElement(run);
paragraph.RemoveAllElements();
run = Api.CreateRun();
run.AddText("We removed all the paragraph elements and added a new text run inside it.");
paragraph.AddElement(run);
doc.Push(paragraph);