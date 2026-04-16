// Check the class type returned by a line annotation in a PDF document.

// How do I check what type a line annotation object is in a PDF document?

// Retrieve and output the class type string for a line annotation in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Annot class type is: ${lineAnnot.GetClassType()}`);