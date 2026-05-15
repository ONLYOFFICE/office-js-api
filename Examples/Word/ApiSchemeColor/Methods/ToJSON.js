// Serialize a scheme color into a transferable data format in a document.

// How do I export a scheme color as structured data for later use in a document?

// Capture a color definition as a portable object that can be recreated in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let schemeColor = Api.CreateSchemeColor("dk1");
let json = schemeColor.ToJSON();
let schemeColorFromJSON = Api.FromJSON(json);
let fill = Api.CreateSolidFill(schemeColorFromJSON);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("curvedUpArrow", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(drawing);