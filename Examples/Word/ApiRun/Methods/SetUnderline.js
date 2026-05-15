// Add an underline beneath a text run in a document.

// How do I display text with a line drawn under it in a document?

// Mark a portion of text so that it appears underlined when rendered in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetUnderline(true);
run.AddText("This is a text run with the text underlined with a single line.");
paragraph.AddElement(run);