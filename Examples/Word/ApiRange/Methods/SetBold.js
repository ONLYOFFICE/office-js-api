// Apply bold formatting to a range of text in a document.

// How do I make a portion of text appear bold in a document?

// Strengthen the visual weight of selected words by turning them bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetBold(true);