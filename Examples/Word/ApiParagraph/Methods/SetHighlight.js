// This example sets highlight color "lightGray" for the paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text highlighted with light gray color.");
paragraph.SetHighlight("lightGray");