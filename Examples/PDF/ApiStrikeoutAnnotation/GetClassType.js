// This example gets class type of caret annotation.
let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddAnnot(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);