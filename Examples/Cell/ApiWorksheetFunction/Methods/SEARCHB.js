// This example shows how to return the location of the specified substring in a string and is intended for languages that use the double-byte character set (DBCS) like Japanese, Chinese, Korean etc.

// How to get number of characters counting from the first occurance of search text for double-byte character set languages.

// Use a function to count characters starting from the index at which the search text appears.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEARCHB("line", "Online Office"));