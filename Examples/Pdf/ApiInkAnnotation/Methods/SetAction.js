// This example replaces a link annotation's URI action with a GoTo action.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let linkAnnot = Api.CreateLinkAnnot(
    [10, 10, 160, 40],
    Api.CreateUriAction("https://www.onlyoffice.com")
);
linkAnnot.SetBorderWidth(1);
linkAnnot.SetBorderColor(Api.RGB(0, 0, 255));
page.AddObject(linkAnnot);

let goToAction = Api.CreateGoToAction(0, "fit", null, [0, 0, 200, 300]);
linkAnnot.SetAction(goToAction);
console.log("Destination page index: " + linkAnnot.GetAction().GetPage());

linkAnnot.SetAction(null);
console.log("Action removed: " + (linkAnnot.GetAction() === null));

linkAnnot.SetAction(goToAction);
