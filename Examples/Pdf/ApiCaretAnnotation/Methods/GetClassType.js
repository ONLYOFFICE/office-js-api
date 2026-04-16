// Find out the class type of a caret annotation object in a PDF document.

// How can I get the class type of a caret annotation in a PDF document?

// Get the class type of a caret annotation and display it in the PDF.

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);