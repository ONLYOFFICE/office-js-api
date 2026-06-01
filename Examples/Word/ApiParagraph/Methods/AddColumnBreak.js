// Insert a column break to continue text in the next column in a document.

// How do I force text to start at the top of the next column in a document?

// Divide a paragraph across two columns by placing a break at a specific position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetEqualColumns(2, 720);
paragraph.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
paragraph.AddColumnBreak();
paragraph.AddText("This is the text which starts from the beginning of the second column. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");