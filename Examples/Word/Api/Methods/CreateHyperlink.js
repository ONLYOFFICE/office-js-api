// Insert a clickable hyperlink with custom display text into a document.

// How do I add a hyperlink with a tooltip to a paragraph in a document?

// Embed a named web link that shows a tooltip when hovered, then read back its type in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let hyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
paragraph.AddElement(hyperlink, 0);
paragraph.AddLineBreak();
paragraph.AddText("Class type of the created object: " + hyperlink.GetClassType());