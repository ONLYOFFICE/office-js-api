// This example wraps the paragraph content in a mail merge field.

// How to create a paragraph wrapped in 'Mail Merge Field'.

// Add a paragraph to the mail merge field.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();