// This example shows how to get custom XML parts by their namespace.

// How to retrieve custom XML parts using their namespace.

// Get XML parts by namespace.

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