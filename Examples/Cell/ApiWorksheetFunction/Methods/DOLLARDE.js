// Convert a fractional dollar price to its decimal equivalent.

// Transform prices from fractional notation to decimal notation.

// Use the DOLLARDE function to convert fractional prices to decimal format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARDE(1.03, 16));