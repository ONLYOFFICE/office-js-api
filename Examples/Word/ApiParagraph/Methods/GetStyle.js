// This example shows how to get the paragraph style method.
let document = Api.GetDocument();
let newDocumentStyle = document.GetStyle("Heading 6");
let paragraph = document.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
let style = paragraph.GetStyle();
paragraph.AddLineBreak();
paragraph.AddText("Style: " + style.GetName());