// Get a custom XML part by its ID in a spreadsheet.

// How to retrieve a custom XML part using its ID in a spreadsheet.

// Get an XML part by its ID in a spreadsheet.

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