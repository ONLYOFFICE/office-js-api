// This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run.

// How to change language of the text for grammar check.

// Create a new text run and change its language.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetLanguage("en-CA");
run.AddText("This is a text run with the text language set to English (Canada).");
paragraph.AddElement(run);