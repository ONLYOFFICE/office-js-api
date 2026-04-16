// Convert the stroke object into the JSON object in a document.

// How to get a JSON from the stroke object in a document.

// Convert the stroke to json and add it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let rgbColor = Api.RGB(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
let json = stroke.ToJSON();
let strokeFromJSON = Api.FromJSON(json);
let drawing = Api.CreateShape("roundRect", 5930900, 395605, fill, strokeFromJSON);
paragraph.AddDrawing(drawing);