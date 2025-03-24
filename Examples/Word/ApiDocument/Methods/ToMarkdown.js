// This example converts a document to Markdown.

// How to get a markdown object from the document content.

// Convert the document to markdown.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("Heading 1");
let heading1Style = doc.GetStyle("Heading 1");
paragraph1.SetStyle(heading1Style);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This document will be converted to Markdown.");
doc.Push(paragraph2);
let search = paragraph2.Search("Markdown");
search[0].SetBold(true);
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Heading 2");
doc.Push(paragraph3);
let heading2Style = doc.GetStyle("Heading 2");
paragraph3.SetStyle(heading2Style);
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("There is an example of two heading levels.");
doc.Push(paragraph4);
let markdown = doc.ToMarkdown(false, false, true, false);
let paragraph5 = Api.CreateParagraph();
paragraph5.AddLineBreak();
paragraph5.AddText("Markdown").SetBold(true);
paragraph5.AddLineBreak();
paragraph5.AddText(markdown);
doc.Push(paragraph5);