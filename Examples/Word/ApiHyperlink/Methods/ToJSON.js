// This example converts the ApiHyperlink object into the JSON object.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
let json = hyperlink.ToJSON(true);
let hyperlinkFromJSON = Api.FromJSON(json);
hyperlinkFromJSON.SetDefaultStyle();
paragraph.AddElement(hyperlinkFromJSON);