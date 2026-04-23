// Access the custom XML storage on a worksheet to add and look up XML parts in a spreadsheet.

// How do I store and retrieve custom XML data on a sheet in a spreadsheet?

// Manage structured XML content attached to a worksheet by adding a part and fetching it by ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
worksheet.GetRange("A1").SetValue("Retrieved XML: " + retrievedXml.GetXml());