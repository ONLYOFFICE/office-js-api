// Set rotate for first page in document.

// How can I set rotation using a page in a PDF document?

// Set rotation for a page in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);