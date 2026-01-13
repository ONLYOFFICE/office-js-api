// This example sets rotate for stamp annotation.
let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
stampAnnot.SetRotate(180);
let page = doc.GetPage(0);
page.AddAnnot(stampAnnot);
console.log(`We set rotate angle to: ${stampAnnot.GetRotate()} for stamp annotation`);