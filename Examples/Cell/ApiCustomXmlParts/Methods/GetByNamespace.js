// Filter stored XML blocks by their declared namespace in a spreadsheet.

// How do I find all XML entries that belong to a specific namespace in a spreadsheet?

// Narrow down embedded XML data to only those matching a given namespace in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<config xmlns='http://example.com/config'><setting>value1</setting></config>");
xmlManager.Add("<data xmlns='http://example.com/data'><entry>value2</entry></data>");
xmlManager.Add("<info xmlns='http://example.com/config'><detail>value3</detail></info>");
let configParts = xmlManager.GetByNamespace("http://example.com/config");
worksheet.GetRange("A1").SetValue("Found " + configParts.length + " XML parts with config namespace:");
for (let i = 0; i < configParts.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Config part " + (i + 1) + ": " + configParts[i].GetXml());
}