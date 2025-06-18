// This example converts the ApiRange object into the JSON object.

// How to get a JSON from the range.

// Convert the range content to json and add it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = Api.CreateRange(paragraph, 0, 9);
range.SetBold(true);
let json = range.ToJSON(false, true);
let rangeFromJSON = Api.FromJSON(json);
doc.Push(rangeFromJSON[0]);