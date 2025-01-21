// This example wraps the paragraph content in a mail merge field.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();