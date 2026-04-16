// Check the class type returned by a stamp annotation in a PDF document.

// How do I check what type a stamp annotation object is in a PDF document?

// Retrieve and output the class type string for a stamp annotation in a PDF document.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Annot class type is: ${stampAnnot.GetClassType()}`);