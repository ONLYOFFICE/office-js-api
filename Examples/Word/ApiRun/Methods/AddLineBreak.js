// This example adds a line break to the run position and starts the next element from a new line.

// How to start a sentence on a new line.

// Break two lines of a text run with a line. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the text for the first line. Nothing special.");
run.AddLineBreak();
run.AddText("This is the text which starts from the beginning of the second line. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);