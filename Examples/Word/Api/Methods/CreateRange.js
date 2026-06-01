// Bold the first several characters of a paragraph by selecting a text range in a document.

// How do I select a specific portion of a paragraph and make it bold in a document?

// Apply bold formatting to the opening words of a paragraph without affecting the rest of the text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.CreateRange(paragraph, 0, 11).SetBold(true);