// This example gets a link annotation's URI action and edits the link through it.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let linkAnnot = Api.CreateLinkAnnot(
    [10, 10, 160, 40],
    Api.CreateUriAction("https://www.onlyoffice.com")
);
linkAnnot.SetBorderWidth(1);
linkAnnot.SetBorderColor(Api.RGB(0, 0, 255));
page.AddObject(linkAnnot);

let action = linkAnnot.GetAction();
console.log("Current URI: " + action.GetUri());
action.SetUri("https://www.onlyoffice.com/docs");
console.log("Updated URI: " + linkAnnot.GetAction().GetUri());
