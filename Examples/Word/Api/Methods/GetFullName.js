// This example gets a document name and inserts it into the document.
let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("File name: " + Api.GetFullName());