// This example shows how to extract the substring from the specified string starting from the left character and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

// How to extract the substring from the left character.

// Use a function to get the substring from the left.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEFTB("Online Office", 6));