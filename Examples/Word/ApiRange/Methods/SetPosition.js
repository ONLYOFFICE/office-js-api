// Specify the amount by which text is raised or lowered for the Range in relation to the default baseline of the surrounding non-positioned text in a document.

// How to set an inline position of a range text in a document.

// Get a range text, specify its position to move down or up in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.AddText("This is a text run with the text raised 5 points (10 half-points).");
let range = doc.GetRange(22, 75);
range.SetPosition(10);