// Retrieve the last non-empty run in a paragraph in a document.

// How do I access the final run element of a paragraph in a document?

// Bold the last run of a paragraph to highlight the closing text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is an Run with text. ");
paragraph.Push(run1);
let run2 = Api.CreateRun();
run2.AddText("And this is the last Run in the paragraph.");
paragraph.Push(run2);
let lastRun = paragraph.Last();
lastRun.SetBold(true);