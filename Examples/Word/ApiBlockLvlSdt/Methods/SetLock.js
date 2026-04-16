// Set the lock to the block text content control in a document.

// Create a block content control and set its lock to "sdtContentLocked", which means that the content cannot be edited and the container cannot be deleted in a document.

// How to set the lock to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
blockLvlSdt.SetLock("sdtContentLocked");
doc.AddElement(0, blockLvlSdt);
let lock = blockLvlSdt.GetLock();
let paragraph = doc.GetElement(1);
paragraph.AddText("Lock type: " + lock);