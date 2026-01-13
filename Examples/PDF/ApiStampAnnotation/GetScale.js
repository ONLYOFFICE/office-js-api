// This example gets scale of stamp annotation.
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
let page = doc.GetPage(0);
page.AddAnnot(stampAnnot);
console.log(`We set scale: ${stampAnnot.GetType()} for stamp annotation`);