// This example gets type of stamp annotation.
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Stamp type is: ${stampAnnot.GetType()}`);