// Retrieve all heading paragraphs in a document.

// How do I collect every heading paragraph present in a document?

// Apply capitalization to the first heading when enforcing a consistent title style.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
let headingParagraphs = doc.GetAllHeadingParagraphs();
headingParagraphs[0].SetCaps(true);