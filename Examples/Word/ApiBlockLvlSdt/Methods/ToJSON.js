// Save a content control as JSON and restore it in a document.

// How do I serialize a content control to JSON and recreate it in a document?

// Export a content control to JSON format and insert the restored copy into a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetAlias("№1");
let json = blockLvlSdt.ToJSON(false, true);
let blockLvlSdtFromJSON = Api.FromJSON(json);
blockLvlSdtFromJSON.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdtFromJSON);