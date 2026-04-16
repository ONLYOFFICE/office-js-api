// Convert the block-level content control object into the JSON object in a document.

// Create a block content control and convert it into the JSON object in a document.

// How to create the JSON object from the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetAlias("№1");
let json = blockLvlSdt.ToJSON(false, true);
let blockLvlSdtFromJSON = Api.FromJSON(json);
blockLvlSdtFromJSON.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdtFromJSON);