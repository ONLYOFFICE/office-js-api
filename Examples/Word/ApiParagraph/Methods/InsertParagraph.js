// Insert a new paragraph relative to an existing one in a document.

// How do I add a paragraph after another paragraph in a document?

// Place a second paragraph immediately after the first without pushing to the end in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This paragraph was inserted here.");
paragraph1.InsertParagraph(paragraph2, "after", true);