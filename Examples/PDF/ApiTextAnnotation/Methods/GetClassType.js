// This example gets class type of text annotation.
let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
let classType = textAnnot.GetClassType();
textAnnot.SetContents(classType);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Annot class type is: ${classType}`);