// Convert the scheme color object into the JSON object in a document.

// How to get a JSON from the color object in a document.

// Convert the RGB color object to json and add it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let schemeColor = Api.CreateSchemeColor("dk1");
let json = schemeColor.ToJSON();
let schemeColorFromJSON = Api.FromJSON(json);
let fill = Api.CreateSolidFill(schemeColorFromJSON);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(drawing);