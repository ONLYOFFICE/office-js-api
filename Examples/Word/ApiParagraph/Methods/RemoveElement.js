// Remove a specific element from a paragraph by its position in a document.

// How do I delete one element at a given index from a paragraph in a document?

// Drop the third run from a paragraph while keeping all surrounding content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.RemoveAllElements();
let run = Api.CreateRun();
run.AddText("This is the first paragraph element. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the second paragraph element. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the third paragraph element (it will be removed from the paragraph and we will not see it). ");
paragraph.AddElement(run);
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("This is the fourth paragraph element - it became the third, because we removed the previous run from the paragraph. ");
paragraph.AddElement(run);
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("Please note that line breaks are not counted into paragraph elements!");
paragraph.AddElement(run);
paragraph.RemoveElement(2);