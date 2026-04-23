// Collect all nested content controls inside a content control in a document.

// How do I get a list of all content controls contained within another content control in a document?

// Nest multiple content controls inside a parent control and retrieve them all at once in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let innerSdt1 = Api.CreateBlockLvlSdt();
innerSdt1.GetContent().GetElement(0).AddText("This is the first block text content control.");
let innerSdt2 = Api.CreateBlockLvlSdt();
innerSdt2.GetContent().GetElement(0).AddText("This is the second block text content control.");
blockLvlSdt.AddElement(innerSdt1, 0);
blockLvlSdt.AddElement(innerSdt2, 1);
doc.AddElement(0, blockLvlSdt);
let contentControls = blockLvlSdt.GetAllContentControls();
contentControls[0].GetContent().GetElement(0).SetBold(true);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + contentControls[0].GetClassType());
doc.Push(paragraph);