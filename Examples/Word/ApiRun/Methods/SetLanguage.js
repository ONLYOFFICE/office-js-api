// Assign a spell-check language to a text run in a document.

// How do I tell the editor which language to use when checking a run of text in a document?

// Target a specific locale for grammar and spelling validation in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetLanguage("en-CA");
run.AddText("This is a text run with the text language set to English (Canada).");
paragraph.AddElement(run);