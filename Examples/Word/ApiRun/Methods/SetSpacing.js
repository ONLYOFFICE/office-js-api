// Control the amount of space between characters in a text run in a document.

// How do I increase or decrease the gap between letters in a run of text in a document?

// Spread or compress characters to achieve a desired typographic density in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetSpacing(80);
run.AddText("This is a text run with the text spacing set to 4 points (20 twentieths of a point).");
paragraph.AddElement(run);