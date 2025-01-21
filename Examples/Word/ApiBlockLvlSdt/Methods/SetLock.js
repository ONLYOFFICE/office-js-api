// This example sets the lock to the block text content control.
let document = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
blockLvlSdt.SetLock("sdtContentLocked");
document.AddElement(0, blockLvlSdt);
let lock = blockLvlSdt.GetLock();
let paragraph = document.GetElement(1);
paragraph.AddText("Lock type: " + lock);