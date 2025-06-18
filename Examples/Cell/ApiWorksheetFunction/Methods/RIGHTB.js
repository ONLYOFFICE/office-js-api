// This example shows how to extract a substring from a string starting from the right-most character, based on the specified number of characters and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

// How to get characters from the end of a string for languages that use the double-byte character set.

// Use a function to return n characters from the right part of a text.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.RIGHTB("Online Office", 2));