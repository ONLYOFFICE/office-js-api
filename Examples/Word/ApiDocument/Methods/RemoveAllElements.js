// This example removes all the elements from the current document or from the current document element.
let doc = Api.GetDocument();
doc.RemoveAllElements();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("We removed all document elements (including the first paragraph, created by default). ");
paragraph.AddText("This paragraph now took its place.");
doc.AddElement(0, paragraph);