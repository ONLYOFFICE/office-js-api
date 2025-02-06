// This example shows how to look up a value either from a one-row or one-column range. Provided for backwards compatibility.
// How to look up a value from a one-row or one-column range.
// Use a function to find a value from a row or a column range.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ids = ["ID", 1, 2, 3, 4, 5];
var clients = ["Client", "John Smith", "Ella Tompson", "Mary Shinoda", "Lily-Ann Bates", "Clara Ray"];
var phones = ["Phone number", "12054097166", "13343943678", "12568542099", "12057032298", "12052914781"];

for (var i = 0; i < ids.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(ids[i]);
}
for (var j = 0; j < clients.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(clients[j]);
}
for (var n = 0; n < phones.length; n++) {
    oWorksheet.GetRange("C" + (n + 1)).SetValue(phones[n]);
}

oWorksheet.GetRange("E1").SetValue("Name");
oWorksheet.GetRange("E2").SetValue("Ella Tompson");
oWorksheet.GetRange("F1").SetValue("Phone number");
var oRange1 = oWorksheet.GetRange("B2:B5");
var oRange2 = oWorksheet.GetRange("C2:C5");
oWorksheet.GetRange("F2").SetValue(oFunction.LOOKUP("Ella Tompson", oRange1, oRange2));