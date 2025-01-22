// This example adds a hyperlink to the specified range.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddHyperlink("https://www.onlyoffice.com/", "Main portal");