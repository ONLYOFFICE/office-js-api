// This example creates a copy of the run.

// How to create a duplicate of the text.

// Create a copy of the run and insert it to the paragraph. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run1);
let run2 = run1.Copy();
paragraph.AddElement(run2);