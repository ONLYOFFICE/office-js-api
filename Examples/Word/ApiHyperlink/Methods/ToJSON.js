// Convert a hyperlink to a JSON object and insert it into a paragraph in a document.

// How do I serialize a hyperlink to JSON and restore it in a document?

// Duplicate a hyperlink by exporting it to JSON and re-importing it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
let json = hyperlink.ToJSON(true);
let hyperlinkFromJSON = Api.FromJSON(json);
hyperlinkFromJSON.SetDefaultStyle();
paragraph.AddElement(hyperlinkFromJSON);