// Remove a specific element from a paragraph by its position in a document.

// How do I delete one element at a given index from a paragraph in a document?

// Drop the third run from a paragraph while keeping all surrounding content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.RemoveAllElements();
let run = paragraph.GetElement(0);
run.AddText("This is the first paragraph element.");
run.AddLineBreak();
run = Api.CreateRun();
run.AddText("This is the second paragraph element.");
run.AddLineBreak();
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the third paragraph element (it will be removed from the paragraph and we will not see it).");
run.AddLineBreak();
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the fourth paragraph element - it became the third, because we removed the previous run from the paragraph.");
run.AddLineBreak();
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("Please note that each line break is added inside its run, so it is not a separate paragraph element.");
paragraph.AddElement(run);
paragraph.RemoveElement(2);