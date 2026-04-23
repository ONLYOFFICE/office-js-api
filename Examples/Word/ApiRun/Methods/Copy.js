// Duplicate a text run and place the copy into the same paragraph in a document.

// How do I reproduce an existing text run and insert it again in a document?

// Clone a run so the same styled text appears twice within a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run1);
let run2 = run1.Copy();
paragraph.AddElement(run2);