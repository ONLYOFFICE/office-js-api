// Make a search in the content control object in a document.

// Create a block content control, add two paragraphs to it, and search for the specified word among the text in this container in a document.

// How to search for the specified string in the block-level content control object in a document.

// Search for the specified word in the block level content control and return it as the cell range object.

// Search for the specified word in the block-level content control object and set the bold property to the second occurrence of this word in the container in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph in the content control.");
blockLvlSdt.AddElement(paragraph1, 0);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph in the content control.");
blockLvlSdt.AddElement(paragraph2, 1);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.Search("paragraph")[1].SetBold(true);