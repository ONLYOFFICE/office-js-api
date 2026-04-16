// Find out the class type of a line annotation object in a PDF document.

// How can I get the class type of a line annotation in a PDF document?

// Get the class type of a line annotation and display it in the PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Annot class type is: ${lineAnnot.GetClassType()}`);