// This example inserts a paragraph at the specified position.
let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This paragraph was inserted here.");
paragraph1.InsertParagraph(paragraph2, "after", true);