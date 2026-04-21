// Get your document in Markdown format and paste the result into the document.

// Convert a document to Markdown format and insert the result into the document.

// Add a text with different heading levels to the document, convert it to Markdown, and paste it back into the document.

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