// Add placeholder text to an empty content control in a document.

// How do I set hint text that appears inside an unfilled content control in a document?

// Guide users with a prompt message shown inside a blank content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Enter your name here");