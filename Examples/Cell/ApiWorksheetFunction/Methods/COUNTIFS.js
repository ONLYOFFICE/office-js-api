let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let buyer = ["Buyer", "Tom", "Bob", "Ann", "Kate", "John"];
let product = ["Product", "Apples", "Red apples", "ranges", "Green apples", "ranges"];
let quantity = ["Quantity", 12, 45, 18, 26, 10];

for (let i = 0; i < buyer.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(buyer[i]);
}
for (let j = 0; j < product.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(product[j]);
}
for (let n = 0; n < quantity.length; n++) {
    worksheet.GetRange("C" + (n + 1)).SetValue(quantity[n]);
}

let range1 = worksheet.GetRange("B2:B6");
let range2 = worksheet.GetRange("C2:C6");
worksheet.GetRange("E6").SetValue(func.COUNTIFS(range1, "*apples", range2, "45"));