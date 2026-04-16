// Set the placeholder text for the content control in a document.

// Create a block content control and set the placeholder text to it in a document.

// How to add the placeholder text to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Enter your name here");