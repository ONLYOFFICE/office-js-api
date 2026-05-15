// Change the typeface of a text run to a chosen font family in a document.

// How do I set a specific font family for a piece of text in a document?

// Switch the lettering style of a run by assigning a different font in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontFamily("Calibri Light");
run.AddText("This is a text run with the font family set to 'Calibri Light'.");
paragraph.AddElement(run);