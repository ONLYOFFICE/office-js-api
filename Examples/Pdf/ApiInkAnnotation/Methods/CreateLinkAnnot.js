// This example creates a link annotation that navigates to the first page of a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
let linkAnnot = Api.CreateLinkAnnot([10, 10, 160, 40], goToAction);
linkAnnot.SetBorderWidth(1);
linkAnnot.SetBorderColor(Api.RGB(0, 0, 255));
page.AddObject(linkAnnot);

console.log("Link annotation class type: " + linkAnnot.GetClassType());
