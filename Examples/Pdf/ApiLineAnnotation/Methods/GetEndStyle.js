// Get end line style to line annotation in a PDF document.

// How to get the end style for a line annotation in a PDF document?

// Get the end style and display the result in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End style is: ${lineAnnot.GetEndStyle()}`);