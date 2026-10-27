// Set the spell-check language for a range of text in a document.

// How do I tell the editor which language to use when checking part of a paragraph in a document?

// Set the language of the first word and print it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text.");
let range = paragraph.GetRange(0, 4);
range.SetLanguage("en-CA");
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Language of the first word: " + range.GetTextPr().GetLanguage());
doc.Push(resultParagraph);