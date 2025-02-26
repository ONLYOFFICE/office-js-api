// This example shows how to look for a value in the top row of a table or array of values and returns the value in the same column from the specified row.

// How to find a value from the row of a table.

// Use a function to look up a value from a table or an array and return found value.

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

oWorksheet.GetRange("E1").SetValue("ID");
oWorksheet.GetRange("E2").SetValue(3);
oWorksheet.GetRange("F1").SetValue("Phone number");
var oRange = oWorksheet.GetRange("A1:C5");
oWorksheet.GetRange("F2").SetValue(oFunction.HLOOKUP("Phone number", oRange, 3+1));