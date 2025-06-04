// This example creates a hyperlink and pastes it into the document.

// How to create the ApiHyperlink object and add it to the ApiParagraph class.

// Creates a hyperlink with the specified URL address, display text and tip text and adds it to the first paragraph of the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
paragraph.AddElement(hyperlink, 0);
paragraph.AddLineBreak();
paragraph.AddText("Class type of the created object: " + hyperlink.GetClassType());