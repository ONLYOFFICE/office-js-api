// This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of the text run.

// How to set a language to the text for grammar checking.

// Create a text run object, change its language to English for grammar check.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetLanguage("en-CA");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text language set to English (Canada).");
run.SetTextPr(textPr);
paragraph.AddElement(run);