// This example shows how to look for a value in the top row of a table or array of values and returns the value in the same column from the specified row.

// How to find a value from the row of a table.

// Use a function to look up a value from a table or an array and return found value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
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

worksheet.GetRange("E1").SetValue("ID");
worksheet.GetRange("E2").SetValue(3);
worksheet.GetRange("F1").SetValue("Phone number");
let range = worksheet.GetRange("A1:C5");
worksheet.GetRange("F2").SetValue(func.HLOOKUP("Phone number", range, 3+1));