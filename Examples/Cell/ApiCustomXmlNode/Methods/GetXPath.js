// Determine the full path address of an XML node within a document in a spreadsheet.

// How do I find out where an XML node sits in the overall structure in a spreadsheet?

// Identify the exact location of a node by reading its path expression in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<company><department><employee>John</employee></department></company>");
let employeeNode = xml.GetNodes('/company/department/employee')[0];
let xpath = employeeNode.GetXPath();
worksheet.GetRange("A1").SetValue("XPath of employee node: " + xpath);