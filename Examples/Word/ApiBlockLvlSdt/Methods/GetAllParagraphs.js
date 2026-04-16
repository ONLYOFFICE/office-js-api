// Get a collection of paragraph objects in the content control in a document.

// How do I get all paragraphs in a document?

// Get all paragraphs using a block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is the first paragraph in the content control.");
blockLvlSdt.AddElement(paragraph, 0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph in the content control.");
blockLvlSdt.AddElement(paragraph, 1);
doc.AddElement(0, blockLvlSdt);
let paragraphs = blockLvlSdt.GetAllParagraphs();
paragraphs[0].SetBold(true);