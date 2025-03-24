// This example inserts a paragraph at the specified position.

// How to insert the paragraph object into the another element.

// Add paragraph to the content control.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This paragraph was inserted here.");
paragraph1.InsertParagraph(paragraph2, "after", true);