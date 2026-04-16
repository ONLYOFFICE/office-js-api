// Retrieve the class type of a strikeout annotation in a PDF document.

// How to identify the class type of a strikeout annotation in a PDF document?

// Obtain the class type identifier of a strikeout annotation object in a PDF document.

let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);