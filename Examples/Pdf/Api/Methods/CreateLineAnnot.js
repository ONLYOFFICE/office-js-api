// Create a line annotation and add it to the page.

// How do I create the line annot in a PDF document?

// Create the line annot and display the result in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 11, y: 11}, {x: 155, y: 25});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);