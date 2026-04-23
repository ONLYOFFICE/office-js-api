// Turn a text run into a mail merge placeholder in a document.

// How do I mark a piece of text so it acts as a merge field in a document?

// Convert a named text run into a field that gets filled during mail merge in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Name");
paragraph.AddElement(run);
run.WrapInMailMergeField();
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("Surname");
paragraph.AddElement(run);
run.WrapInMailMergeField();