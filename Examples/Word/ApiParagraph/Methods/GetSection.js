// Get the paragraph section in a document.

// How to get the section where the paragraph is located in a document.

// Get the paragraph section and set its page size.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
let section = paragraph.GetSection();
section.SetPageSize(7200, 4320);