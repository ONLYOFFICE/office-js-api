// Get the document object for further use.

// How to get the document in a PDF document?

// Get the document using the PDF document API.

let doc = Api.GetDocument();
let page = doc.AddPage(1);
page.SetRotation(90);