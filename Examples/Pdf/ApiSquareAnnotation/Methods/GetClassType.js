// Retrieve the class type of a square annotation in a PDF document.

// How to identify the class type of a square annotation in a PDF document?

// Obtain the class type identifier of a square annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot class type is: ${squareAnnot.GetClassType()}`);