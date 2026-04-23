// Retrieve all paragraphs in a document.

// How do I collect every paragraph present in a document?

// Make the first paragraph bold to visually distinguish it from the rest of the content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraph 2");
doc.AddElement(1, paragraph);
let paragraphs = doc.GetAllParagraphs();
paragraphs[0].SetBold(true);