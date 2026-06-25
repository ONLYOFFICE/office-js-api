// Get the classification code for a strikeout annotation in a PDF

// What is the internal type identifier for a strikeout annotation in a PDF?

// Find and display the class name of a strikeout annotation in a PDF

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
