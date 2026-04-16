// Get first page and set rotate.

// How to get the page for a document?

// Get the page and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);