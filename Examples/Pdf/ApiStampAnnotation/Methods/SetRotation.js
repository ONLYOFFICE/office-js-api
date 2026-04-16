// Set rotate for stamp annotation in a PDF document.

// How to set rotation for a stamp annotation in a PDF document?

// Set rotation and display the result in a PDF document.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
stampAnnot.SetRotation(180);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set rotate angle to: ${stampAnnot.GetRotation()} for stamp annotation`);