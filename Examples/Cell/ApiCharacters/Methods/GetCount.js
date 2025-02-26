// This example shows how to get a value that represents a number of objects in the collection.

// How to get collection objects count.

// How to get array length.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var nCount = oCharacters.GetCount();
oWorksheet.GetRange("B3").SetValue("Number of characters: " + nCount);