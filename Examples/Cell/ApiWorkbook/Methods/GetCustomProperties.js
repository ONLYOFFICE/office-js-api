// Access the custom properties stored with a workbook and read one of their values in a spreadsheet.

// How do I store and retrieve my own metadata on a workbook in a spreadsheet?

// Add a named string property to the workbook and display its value in a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const customProps = workbook.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
let stringValue = customProps.Get("MyStringProperty");

const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue(stringValue);