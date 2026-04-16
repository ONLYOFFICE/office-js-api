// Add a column break to the run position and start the next element from a new column in a document.

// How to add a column break between the text in a document.

// Add text to the text run and separate it with a column break in a document.

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