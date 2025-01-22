// This example converts the ApiParaPr object into the JSON object.
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 0, 255, 0);
let json = paraPr.ToJSON(true);
let paraPrFromJSON = Api.FromJSON(json);
let type = paraPrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);