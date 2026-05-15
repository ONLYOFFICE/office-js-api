// Serialize paragraph properties to a JSON object in a document.

// How do I export paragraph formatting settings as JSON in a document?

// Restore paragraph properties from a JSON representation and verify the class type in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 0, 255, 0);
let json = paraPr.ToJSON(true);
let paraPrFromJSON = Api.FromJSON(json);
let type = paraPrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);