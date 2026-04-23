// Extract the text value of an inline content control as it appears in XML mapping in a document.

// How do I retrieve the XML-mapped data from an inline content control in a document?

// Output the raw control value to verify what would be written to a bound XML store in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateInlineLvlSdt();
contentControl.AddText("This is an inline content control.");
let paragraph = doc.GetElement(0);
paragraph.Push(contentControl);

let data = contentControl.GetDataForXmlMapping();
paragraph = Api.CreateParagraph();
paragraph.AddText(data);
doc.Push(paragraph);