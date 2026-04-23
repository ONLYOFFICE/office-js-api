// Remove a text run from a paragraph in a document.

// How do I delete a piece of text that was added as a run in a document?

// Erase a specific run so it no longer appears in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is run №1.");
paragraph.AddElement(run1);
let run2 = Api.CreateRun();
run2.AddText("This is run №2.");
paragraph.AddElement(run2);
run1.RemoveAllElements();
paragraph.AddLineBreak();
paragraph.AddText("The first run was removed from the document.");