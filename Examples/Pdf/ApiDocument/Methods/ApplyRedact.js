// Hide sensitive content permanently in a PDF.

// Can I remove information so it cannot be recovered in a PDF?

// Cover and protect confidential areas in a PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
page.AddObject(redactAnnot);
doc.ApplyRedact();
console.log('We added a redact annot to first page and applied it');
