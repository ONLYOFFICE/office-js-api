// This example sets the italic property to the text character.

// How to make a range text italic.

// Create a range, change its properties by making it italic.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetItalic(true);