// This example adds a redact annot to first page and applies redact.
let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
doc.ApplyRedact();
console.log('We added a redact annot to first page and applied it');