// Add a formatted text segment to the first paragraph in a document.

// How do I create a standalone piece of text and append it to an existing paragraph in a document?

// Insert new text into a paragraph as a separate block that can carry its own formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);