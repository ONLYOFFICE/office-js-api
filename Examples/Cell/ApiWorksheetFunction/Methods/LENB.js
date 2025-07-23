// This example shows how to analyse the specified string and returns the number of characters it contains and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

// How to analyse the specified string and get its length.

// Use a function to analyse a string, get length of a string and its intended language.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LENB("Online Office"));