// Add a column break to the current position and start the next element from a new column in a document.

// How to add a column break between the text of paragraph in a document.

// Split paragraph with a coulumn break in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetEqualColumns(2, 720);
paragraph.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
paragraph.AddColumnBreak();
paragraph.AddText("This is the text which starts from the beginning of the second column. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");