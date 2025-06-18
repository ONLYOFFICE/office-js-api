// This example shows how to look up a value either from a one-row or one-column range. Provided for backwards compatibility.

// How to look up a value from a one-row or one-column range.

// Use a function to find a value from a row or a column range.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ids = ["ID", 1, 2, 3, 4, 5];
let clients = ["Client", "John Smith", "Ella Tompson", "Mary Shinoda", "Lily-Ann Bates", "Clara Ray"];
let phones = ["Phone number", "12054097166", "13343943678", "12568542099", "12057032298", "12052914781"];

for (let i = 0; i < ids.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(ids[i]);
}
for (let j = 0; j < clients.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(clients[j]);
}
for (let n = 0; n < phones.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(phones[n]);
}

worksheet.GetRange("E1").SetValue("Name");
worksheet.GetRange("E2").SetValue("Ella Tompson");
worksheet.GetRange("F1").SetValue("Phone number");
let range1 = worksheet.GetRange("B2:B5");
let range2 = worksheet.GetRange("C2:C5");
worksheet.GetRange("F2").SetValue(func.LOOKUP("Ella Tompson", range1, range2));