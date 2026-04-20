// Create a range and set bold for the first 10 characters in a document.

// Create the range object from the paragraph class and set the range to bold.

// How to create a range from the paragraph and set a bold property to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.CreateRange(paragraph, 0, 11).SetBold(true);