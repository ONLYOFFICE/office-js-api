// This example creates a range and sets bold for the first 10 characters.

// Creates the ApiRange object from the ApiParagraph class and sets the range to bold.

// How to create a range from the paragraph and set a bold property to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.CreateRange(paragraph, 0, 11).SetBold(true);