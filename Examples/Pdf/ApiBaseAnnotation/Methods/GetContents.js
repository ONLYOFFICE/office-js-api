// Retrieve the text or message inside an annotation in a PDF.

// What text is stored in an annotation in a PDF?

// Read the content or description that was added to an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetContents("Annot contents");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation contents is: ${squareAnnot.GetContents()}`);