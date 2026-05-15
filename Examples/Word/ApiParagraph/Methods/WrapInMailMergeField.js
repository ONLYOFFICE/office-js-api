// Enclose a paragraph inside a mail merge field so its text acts as a merge placeholder in a document.

// How do I mark a paragraph as a mail merge field to be filled with data during merging in a document?

// Turn a paragraph into a dynamic merge region that gets replaced with real values during mail merge in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();