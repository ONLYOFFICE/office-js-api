// Check the class type returned by a text run in a document.

// How do I check what type a text run object is in a document?

// Retrieve and output the class type string for a text run in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
let classType = run.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);