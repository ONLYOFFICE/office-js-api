// Find the angle of a stamp in a PDF.

// How do I check how much a stamp is rotated in a PDF?

// See the rotation angle of a stamp annotation in a PDF.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
let oldRotAngle = stampAnnot.GetRotation();
stampAnnot.SetScale(0.5);
stampAnnot.SetRotation(180);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We change stamp rotate angle from ${oldRotAngle} to: ${stampAnnot.GetRotation()}`);