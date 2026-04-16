// Get type of stamp annotation in a PDF document.

// How do I get the type in a PDF document?

// Get the type using a stamp annotation object in a PDF document.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Stamp type is: ${stampAnnot.GetType()}`);