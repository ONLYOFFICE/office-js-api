// Get custom properties object of the workbook in a spreadsheet.

// How can I get custom properties using a workbook in a spreadsheet?

// Get custom properties for a workbook in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const customProps = workbook.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
let stringValue = customProps.Get("MyStringProperty");

const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue(stringValue);