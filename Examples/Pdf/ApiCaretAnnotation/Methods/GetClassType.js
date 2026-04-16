// Retrieve the class type of a caret annotation in a PDF document.

// How to identify the class type of a caret annotation in a PDF document?

// Obtain the class type identifier of a caret annotation object in a PDF document.

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);