// Create a copy of the run in a document.

// How to create a duplicate of the text in a document.

// Create a copy of the run and insert it to the paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run1);
let run2 = run1.Copy();
paragraph.AddElement(run2);