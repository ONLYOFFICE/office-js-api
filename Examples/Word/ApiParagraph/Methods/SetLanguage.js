// Set the spell-check language for all text in a paragraph in a document.

// How do I tell the editor which language to use when checking a whole paragraph in a document?

// Set the language of the paragraph and print it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the spell-check language set.");
paragraph.SetLanguage("en-CA");
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Paragraph language: " + paragraph.GetRange().GetTextPr().GetLanguage());
doc.Push(resultParagraph);