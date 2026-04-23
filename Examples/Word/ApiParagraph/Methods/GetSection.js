// Retrieve the section that contains a given paragraph in a document.

// How do I find the section a paragraph belongs to in a document?

// Resize the page by accessing the section through one of its paragraphs in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
let section = paragraph.GetSection();
section.SetPageSize(7200, 4320);