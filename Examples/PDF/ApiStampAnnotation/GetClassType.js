// This example gets class type of stamp annotation.
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'SB_Approved');
let page = doc.GetPage(0);
page.AddAnnot(stampAnnot);
console.log(`Annot class type is: ${stampAnnot.GetClassType()}`);