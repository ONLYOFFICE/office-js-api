// Create a stamp annotation and add it to the page.

// How can I create the stamp annot in a PDF document?

// Create the stamp annot in a PDF document.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([40, 40, 100, 100], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);