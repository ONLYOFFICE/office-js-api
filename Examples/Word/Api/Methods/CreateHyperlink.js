// Create a hyperlink and paste it into the document.

// How to create the hyperlink object and add it to the paragraph class in a document.

// Create a hyperlink with the specified URL address, display text and tip text and add it to the first paragraph of the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
paragraph.AddElement(hyperlink, 0);
paragraph.AddLineBreak();
paragraph.AddText("Class type of the created object: " + hyperlink.GetClassType());