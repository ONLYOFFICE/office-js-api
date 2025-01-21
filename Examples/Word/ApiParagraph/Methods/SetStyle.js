// This example sets a style for the paragraph.
let document = Api.GetDocument();
let newDocumentStyle = document.GetStyle("Heading 6");
let paragraph = document.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");