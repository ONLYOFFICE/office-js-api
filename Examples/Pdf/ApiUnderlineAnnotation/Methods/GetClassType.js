// Check what type of markup is applied to text in a PDF.

// Useful for finding out what type of annotation mark has been used in a PDF.

// Determine the kind of highlight or underline effect on text in a PDF.

let doc = Api.GetDocument();
let underlineAnnot = Api.CreateUnderlineAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(underlineAnnot);
console.log(`Annot class type is: ${underlineAnnot.GetClassType()}`);
