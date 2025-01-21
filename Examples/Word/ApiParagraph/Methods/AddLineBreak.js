// This example adds a line break to the current position and starts the next element from a new line.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is the text for the first line. Nothing special.");
paragraph.AddLineBreak();
paragraph.AddText("This is the text which starts from the beginning of the second line. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");