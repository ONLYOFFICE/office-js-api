// Look up a specific stored XML block using its unique identifier in a spreadsheet.

// How do I find a particular XML entry by its ID in a spreadsheet?

// Locate a single XML block precisely when its identifier is already known in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory><item>Book</item></inventory>");
let id = xml.GetId();
let retrievedXml = xmlManager.GetById(id);
if (retrievedXml) {
    worksheet.GetRange("A1").SetValue("Found XML part: " + retrievedXml.GetXml());
} else {
    worksheet.GetRange("A1").SetValue("XML part not found");
}