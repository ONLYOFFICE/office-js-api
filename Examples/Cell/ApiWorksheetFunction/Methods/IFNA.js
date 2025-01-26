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

let range = worksheet.GetRange("B1:B5");
worksheet.GetRange("D6").SetValue(func.IFNA(func.MATCH("Mark Potato", range, 0), "Not found"));