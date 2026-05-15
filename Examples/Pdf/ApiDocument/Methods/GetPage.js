// Access a single page from a PDF.

// How do I work with a specific page in a PDF?

// Retrieve a page and rotate it in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);