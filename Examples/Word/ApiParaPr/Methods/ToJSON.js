// Convert the paragraph properties object into the JSON object in a document.

// How to get a JSON from the paragraph properties in a document.

// Convert the paragraph properties to json and add it to the paragraph in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 0, 255, 0);
let json = paraPr.ToJSON(true);
let paraPrFromJSON = Api.FromJSON(json);
let type = paraPrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);