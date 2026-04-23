// Convert a decimal dollar price to its fractional equivalent.

// Transform prices from decimal notation to fractional notation.

// Use the DOLLARFR function to convert decimal prices to fractional format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARFR(1.1875, 16));