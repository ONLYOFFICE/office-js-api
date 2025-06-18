// This example creates a copy of a block level content control.

// Creates a block content control in the current document, copies it, and adds a copy to the same document.

// How to create a copy of the ApiBlockLvlSdt object.

// Creates a block level container in the ApiDocument class, adds a text to it, and copies it into the same document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = blockLvlSdt.GetContent().GetElement(0);
paragraph.AddText("This is an block level content control.");
doc.Push(blockLvlSdt);
doc.Push(blockLvlSdt.Copy());