// This example shows how to return the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive).

// How to get number of characters counting from first occurance of search text.

// Use a function to count characters starting from the index at which the search text appears.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SEARCH("line", "Online Office"));