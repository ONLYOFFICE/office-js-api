// List the other workbooks the current workbook is linked to.

// How do I find which external workbooks a spreadsheet depends on?

// Write the path of every linked workbook to the sheet.

let workbook = Api.GetActiveWorkbook();
let worksheet = Api.GetActiveSheet();
let sources = workbook.GetLinkSources();
worksheet.GetRange("A1").SetValue("Linked workbooks: " + sources.length);
for (let i = 0; i < sources.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue(sources[i]);
}
