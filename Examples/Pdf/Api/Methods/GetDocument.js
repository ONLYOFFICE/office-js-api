// Access the document object to modify pages in a PDF.

// How do I access the main document object in a PDF?

// Retrieve the document, add a new page, and rotate it in a PDF.

let doc = Api.GetDocument();
let page = doc.AddPage(0);
page.SetRotation(90);