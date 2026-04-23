// Remove all content elements from a document.

// How do I clear every element out of a document?

// Start fresh by wiping all existing content before adding new paragraphs in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("We removed all document elements (including the first paragraph, created by default). ");
paragraph.AddText("This paragraph now took its place.");
doc.AddElement(0, paragraph);