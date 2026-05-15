// Adjust the spacing between characters in a selected text range in a document.

// How do I spread out or tighten the letters within a highlighted portion of text in a document?

// Control the gap between individual characters to improve readability or achieve a design effect in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetSpacing(2);