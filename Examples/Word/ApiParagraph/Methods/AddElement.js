// Append a text run element to a paragraph in a document.

// How do I insert a formatted run of text into an existing paragraph in a document?

// Build paragraph content by adding a standalone text run as a child element in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a text run. Nothing special.");
paragraph.AddElement(run);