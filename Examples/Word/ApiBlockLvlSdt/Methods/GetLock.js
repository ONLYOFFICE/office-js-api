// This example shows how to get the lock type of the container.

// Creates a block content control, sets its lock to "sdtContentLocked", and returns the lock type to insert it into the second paragraph of the document.

// How to get the lock type of the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
blockLvlSdt.SetLock("sdtContentLocked");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Lock type: " + blockLvlSdt.GetLock());