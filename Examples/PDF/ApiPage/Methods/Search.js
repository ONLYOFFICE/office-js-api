// This example searches a some word in page and adds a highlight to it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let quads = page.Search({text: "Lorem", matchCase: false, wholeWords: false});
let annot = Api.CreateHighlightAnnot(quads);
page.AddAnnot(annot);
console.log('We added a highlight annotations searched word');