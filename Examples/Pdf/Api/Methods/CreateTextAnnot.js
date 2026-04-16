// Create a text annotation and add it to the page.

// How to create the text annot in a PDF document?

// Create the text annot using the PDF document API.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(textAnnot);