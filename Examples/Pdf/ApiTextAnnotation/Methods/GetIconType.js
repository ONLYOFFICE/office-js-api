// Read the icon symbol used by a text annotation in a PDF.

// How do I see which icon a text annotation displays in a PDF?

// Find out what symbol appears for an annotation comment in a PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot contents");

let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Text annot icon type is: ${textAnnot.GetIconType()}`);