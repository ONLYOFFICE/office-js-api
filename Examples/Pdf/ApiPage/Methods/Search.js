// Search a some word in page and add a highlight to it.

// How do I search in a PDF document?

// Search using a page object.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let quads = page.Search({text: "Lorem", matchCase: false, wholeWords: false});
let annot = Api.CreateHighlightAnnot(quads);
page.AddObject(annot);
console.log('We added a highlight annotations searched word');