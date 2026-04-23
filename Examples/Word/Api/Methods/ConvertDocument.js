// Convert document content to Markdown and paste the result back in a document.

// How do I export the text of a document as Markdown in a document?

// Write headings and paragraphs, then append the Markdown version of that content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Heading 1");
paragraph.SetStyle(doc.GetStyle("Heading 1"));

paragraph = Api.CreateParagraph();
paragraph.AddText("This document will be converted to Markdown.");
doc.Push(paragraph);
paragraph.Search("Markdown")[0].SetBold(true);

paragraph = Api.CreateParagraph();
paragraph.AddText("Heading 2");
doc.Push(paragraph);
paragraph.SetStyle(doc.GetStyle("Heading 2"));

paragraph = Api.CreateParagraph();
paragraph.AddText("There is an example of two heading levels.");
doc.Push(paragraph);

let md = Api.ConvertDocument("markdown", false, false, true, false);
paragraph = Api.CreateParagraph();
paragraph.AddLineBreak();
paragraph.AddText("Markdown").SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText(md);
doc.Push(paragraph);