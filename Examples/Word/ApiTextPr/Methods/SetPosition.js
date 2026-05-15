// Raise or lower text relative to the surrounding baseline in a document.

// How do I shift text up or down without changing the line height in a document?

// Fine-tune vertical placement of words by moving them above or below the baseline in a document.

let doc = Api.GetDocument();
let myNewRunStyle1 = doc.CreateStyle("My New Run Style 1", "run");
let textPr1 = myNewRunStyle1.GetTextPr();
textPr1.SetPosition(10);
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle1);
run.AddText("This is a text run with the text raised 5 points (10 half-points). ");
paragraph.AddElement(run);
let myNewRunStyle2 = doc.CreateStyle("My New Run Style 2", "run");
let textPr2 = myNewRunStyle2.GetTextPr();
textPr2.SetPosition(-16);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle2);
run.AddText("This is a text run with the text lowered 8 points (16 half-points).");
paragraph.AddElement(run);