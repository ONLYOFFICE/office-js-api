// This example adds a hyperlink to the specified range.

// Insert a link to the range.

// Get range and add a hyperlink to it. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddHyperlink("https://www.onlyoffice.com/", "Main portal");