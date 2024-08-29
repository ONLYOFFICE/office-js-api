var oDocument = Api.GetDocument();
Api.pluginMethod_AddContentControlList(1, [{Display: "Item1_D", Value: "Item1_V"}, {Display: "Item2_D", Value: "Item2_V"}], {"Id": 100, "Tag": "CC_Tag", "Lock": 3});
var aContentControls = oDocument.GetAllContentControls();
var oContentControlList = aContentControls[0].GetDropdownList();
oContentControlList.Add("Item3_D", "Item3_V", 2);
oDocument.AddElement(0, oContentControlList);