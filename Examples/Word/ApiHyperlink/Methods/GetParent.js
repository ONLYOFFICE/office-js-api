// Access the element that directly contains a hyperlink.

// The parent is the paragraph that directly contains the hyperlink.

// Navigate from a hyperlink up to its parent paragraph and make it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Visit our website");
let hyperlink = paragraph.AddHyperlink("https://www.example.com", "Example");
let parent = hyperlink.GetParent();
parent.SetBold(true);
