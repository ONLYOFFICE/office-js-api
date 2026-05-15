// Split a text run across two columns at a specific point in a document.

// How do I push part of a text run into the next column in a document?

// Force text to continue from the top of the following column in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection(paragraph);
section.SetEqualColumns(2, 720);
let run = Api.CreateRun();
run.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
run.AddColumnBreak();
run.AddText("This is the text which starts from the beginning of the second column. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);