// Delete all custom properties from a spreadsheet.

// The core workbook properties, such as the title, are not affected.

// Add three custom properties and a title, delete all custom properties and write the values before and after into the sheet cells.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();
const customProps = Api.GetCustomProperties();
core.SetTitle("Quarterly report");
customProps.Add("Client", "ONLYOFFICE");
customProps.Add("Pages", 12);
customProps.Add("Approved", true);

worksheet.GetRange("A1").SetValue("Before: " + customProps.Get("Client") + ", " + customProps.Get("Pages") + ", " + customProps.Get("Approved"));
customProps.DeleteAll();
worksheet.GetRange("A2").SetValue("After: " + customProps.Get("Client") + ", " + customProps.Get("Pages") + ", " + customProps.Get("Approved"));
worksheet.GetRange("A3").SetValue("Title: " + core.GetTitle());