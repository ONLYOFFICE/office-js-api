// This example gets class type of redact annotation.
let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
console.log(`Annot class type is: ${redactAnnot.GetClassType()}`);