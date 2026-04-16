// Add a line break to the current position and start the next element from a new line in a document.

// How to split the text of the paragraph in a document.

// Add a line break to the text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text for the first line. Nothing special.");
paragraph.AddLineBreak();
paragraph.AddText("This is the text which starts from the beginning of the second line. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");