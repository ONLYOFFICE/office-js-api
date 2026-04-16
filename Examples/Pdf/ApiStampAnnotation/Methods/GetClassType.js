// Find out the class type of a stamp annotation object in a PDF document.

// How can I get the class type of a stamp annotation in a PDF document?

// Get the class type of a stamp annotation and display it in the PDF.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Annot class type is: ${stampAnnot.GetClassType()}`);