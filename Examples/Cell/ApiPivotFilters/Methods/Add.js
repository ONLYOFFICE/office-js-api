// This example demonstrates comprehensive testing of ApiPivotFilters.Add method
// Creates one comprehensive dataset and 15 pivot tables with different filter types
// Tests all major filter categories: label, value, top/bottom, and date filters

let worksheet = Api.GetActiveSheet();

// === Create Comprehensive Dataset ===
// Headers
worksheet.GetRange('A1').SetValue('Region');
worksheet.GetRange('B1').SetValue('Product');
worksheet.GetRange('C1').SetValue('Salesperson');
worksheet.GetRange('D1').SetValue('Sales');
worksheet.GetRange('E1').SetValue('Profit');
worksheet.GetRange('F1').SetValue('Quantity');
worksheet.GetRange('G1').SetValue('Date');

// Sample data with variety for comprehensive filtering
const sampleData = [
    ['North', 'Laptop', 'Alice Johnson', 5000, 1500, 10, new Date(2024, 0, 15)],
    ['South', 'Desktop', 'Bob Smith', 3500, 1200, 8, new Date(2024, 1, 20)],
    ['East', 'Tablet', 'Carol Brown', 2800, 800, 15, new Date(2024, 2, 10)],
    ['West', 'Phone', 'David Wilson', 4200, 1800, 25, new Date(2024, 3, 5)],
    ['North', 'Monitor', 'Emma Davis', 1500, 600, 12, new Date(2024, 4, 12)],
    ['Central', 'Keyboard', 'Frank Miller', 800, 300, 30, new Date(2024, 5, 8)],
    ['South', 'Mouse', 'Grace Lee', 400, 150, 50, new Date(2024, 6, 22)],
    ['East', 'Laptop', 'Henry Chen', 5500, 2000, 11, new Date(2024, 7, 14)],
    ['West', 'Desktop', 'Ivy Martinez', 4000, 1400, 9, new Date(2024, 8, 3)],
    ['North', 'Tablet', 'Jack Anderson', 3200, 1000, 18, new Date(2024, 9, 17)],
    ['Central', 'Phone', 'Kate Thompson', 4800, 2200, 28, new Date(2024, 10, 25)],
    ['South', 'Monitor', 'Leo Garcia', 1800, 700, 14, new Date(2024, 11, 12)],
    ['East', 'Keyboard', 'Maya Patel', 900, 350, 35, new Date(2024, 0, 8)],
    ['West', 'Mouse', 'Noah Rodriguez', 450, 180, 55, new Date(2024, 1, 28)],
    ['North', 'Laptop', 'Olivia Clark', 5200, 1600, 12, new Date(2024, 2, 18)],
    ['Central', 'Desktop', 'Paul Lewis', 3800, 1300, 10, new Date(2024, 3, 15)],
    ['South', 'Tablet', 'Quinn Walker', 3000, 900, 16, new Date(2024, 4, 22)],
    ['East', 'Phone', 'Rachel Young', 4500, 1900, 26, new Date(2024, 5, 10)],
    ['West', 'Monitor', 'Sam Hill', 1600, 650, 13, new Date(2024, 6, 5)],
    ['North', 'Keyboard', 'Tina Scott', 850, 320, 32, new Date(2024, 7, 20)]
];

// Fill the data
for (let i = 0; i < sampleData.length; i++) {
    const row = i + 2; // Start from row 2
    worksheet.GetRange(`A${row}`).SetValue(sampleData[i][0]); // Region
    worksheet.GetRange(`B${row}`).SetValue(sampleData[i][1]); // Product
    worksheet.GetRange(`C${row}`).SetValue(sampleData[i][2]); // Salesperson
    worksheet.GetRange(`D${row}`).SetValue(sampleData[i][3]); // Sales
    worksheet.GetRange(`E${row}`).SetValue(sampleData[i][4]); // Profit
    worksheet.GetRange(`F${row}`).SetValue(sampleData[i][5]); // Quantity
    worksheet.GetRange(`G${row}`).SetValue(sampleData[i][6]); // Date
}

// Define the data range for all pivot tables
const dataRange = Api.GetRange(`'Sheet1'!$A$1:$G$${sampleData.length + 1}`);

// === PIVOT TABLE 1: Label Filter - Caption Equals ===
let pivotTable1 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('I2'));
pivotTable1.AddFields({ rows: 'Region' });
pivotTable1.AddDataField('Sales');

let regionField1 = pivotTable1.GetPivotFields('Region');
regionField1.PivotFilters.Add("xlCaptionEquals", null, "North");

worksheet.GetRange('I1').SetValue('Test 1: Caption Equals "North"');

// === PIVOT TABLE 2: Label Filter - Caption Contains ===
let pivotTable2 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('M2'));
pivotTable2.AddFields({ rows: 'Product' });
pivotTable2.AddDataField('Sales');

let productField2 = pivotTable2.GetPivotFields('Product');
productField2.PivotFilters.Add("xlCaptionContains", null, "top");

worksheet.GetRange('M1').SetValue('Test 2: Caption Contains "top"');

// === PIVOT TABLE 3: Label Filter - Caption Begins With ===
let pivotTable3 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('Q2'));
pivotTable3.AddFields({ rows: 'Salesperson' });
pivotTable3.AddDataField('Profit');

let salespersonField3 = pivotTable3.GetPivotFields('Salesperson');
salespersonField3.PivotFilters.Add("xlCaptionBeginsWith", null, "A");

worksheet.GetRange('Q1').SetValue('Test 3: Caption Begins With "A"');

// === PIVOT TABLE 4: Label Filter - Caption Is Between ===
let pivotTable4 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('U2'));
pivotTable4.AddFields({ rows: 'Product' });
pivotTable4.AddDataField('Quantity');

let productField4 = pivotTable4.GetPivotFields('Product');
productField4.PivotFilters.Add("xlCaptionIsBetween", null, "Desktop", "Monitor");

worksheet.GetRange('U1').SetValue('Test 4: Caption Between "Desktop" and "Monitor"');

// === PIVOT TABLE 5: Label Filter - Caption Is Greater Than ===
let pivotTable5 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('Y2'));
pivotTable5.AddFields({ rows: 'Region' });
pivotTable5.AddDataField('Sales');

let regionField5 = pivotTable5.GetPivotFields('Region');
regionField5.PivotFilters.Add("xlCaptionIsGreaterThan", null, "East");

worksheet.GetRange('Y1').SetValue('Test 5: Caption Greater Than "East"');

// === PIVOT TABLE 6: Value Filter - Value Is Greater Than ===
let pivotTable6 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('I12'));
pivotTable6.AddFields({ rows: 'Region' });
let salesDataField6 = pivotTable6.AddDataField('Sales');

let regionField6 = pivotTable6.GetPivotFields('Region');
regionField6.PivotFilters.Add("xlValueIsGreaterThan", salesDataField6, 4000);

worksheet.GetRange('I11').SetValue('Test 6: Value Greater Than 4000');

// === PIVOT TABLE 7: Value Filter - Value Is Between ===
let pivotTable7 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('M12'));
pivotTable7.AddFields({ rows: 'Product' });
let profitDataField7 = pivotTable7.AddDataField('Profit');

let productField7 = pivotTable7.GetPivotFields('Product');
productField7.PivotFilters.Add("xlValueIsBetween", profitDataField7, 800, 1500);

worksheet.GetRange('M11').SetValue('Test 7: Value Between 800 and 1500');

// === PIVOT TABLE 8: Value Filter - Value Equals ===
let pivotTable8 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('Q12'));
pivotTable8.AddFields({ rows: 'Region' });
let quantityDataField8 = pivotTable8.AddDataField('Quantity');

let regionField8 = pivotTable8.GetPivotFields('Region');
regionField8.PivotFilters.Add("xlValueEquals", quantityDataField8, 88);

worksheet.GetRange('Q11').SetValue('Test 8: Value Equals 88');

// === PIVOT TABLE 9: Top Count Filter ===
let pivotTable9 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('U12'));
pivotTable9.AddFields({ rows: 'Region' });
let salesDataField9 = pivotTable9.AddDataField('Sales');

let regionField9 = pivotTable9.GetPivotFields('Region');
regionField9.PivotFilters.Add("xlTopCount", salesDataField9, 3);

worksheet.GetRange('U11').SetValue('Test 9: Top 3 Count');

// === PIVOT TABLE 10: Top Sum Filter ===
let pivotTable10 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('Y12'));
pivotTable10.AddFields({ rows: 'Product' });
let profitDataField10 = pivotTable10.AddDataField('Profit');

let productField10 = pivotTable10.GetPivotFields('Product');
productField10.PivotFilters.Add("xlTopSum", profitDataField10, 5000);

worksheet.GetRange('Y11').SetValue('Test 10: Top Sum 5000');

// === PIVOT TABLE 11: Bottom Count Filter ===
let pivotTable11 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('I22'));
pivotTable11.AddFields({ rows: 'Salesperson' });
let salesDataField11 = pivotTable11.AddDataField('Sales');

let salespersonField11 = pivotTable11.GetPivotFields('Salesperson');
salespersonField11.PivotFilters.Add("xlBottomCount", salesDataField11, 5);

worksheet.GetRange('I21').SetValue('Test 11: Bottom 5 Count');

// === PIVOT TABLE 12: Bottom Percent Filter ===
let pivotTable12 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('M22'));
pivotTable12.AddFields({ rows: 'Product' });
let salesDataField12 = pivotTable12.AddDataField('Sales');

let productField12 = pivotTable12.GetPivotFields('Product');
productField12.PivotFilters.Add("xlBottomPercent", salesDataField12, 25);

worksheet.GetRange('M21').SetValue('Test 12: Bottom 25 Percent');

// === PIVOT TABLE 13: Caption Does Not Equal ===
let pivotTable13 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('Q22'));
pivotTable13.AddFields({ rows: 'Region' });
pivotTable13.AddDataField('Quantity');

let regionField13 = pivotTable13.GetPivotFields('Region');
regionField13.PivotFilters.Add("xlCaptionDoesNotEqual", null, "South");

worksheet.GetRange('Q21').SetValue('Test 13: Caption Not Equal "South"');

// === PIVOT TABLE 14: Caption Does Not Contain ===
let pivotTable14 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('U22'));
pivotTable14.AddFields({ rows: 'Product' });
pivotTable14.AddDataField('Profit');

let productField14 = pivotTable14.GetPivotFields('Product');
productField14.PivotFilters.Add("xlCaptionDoesNotContain", null, "Laptop");

worksheet.GetRange('U21').SetValue('Test 14: Caption Not Contain "Laptop"');

// === PIVOT TABLE 15: Date Filter - Quarter 4===
let pivotTable15 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('Y22'));
pivotTable15.AddFields({ rows: 'Date' });
pivotTable15.AddDataField('Sales');

let dateField15 = pivotTable15.GetPivotFields('Date');
dateField15.PivotFilters.Add("xlAllDatesInPeriodQuarter4");

worksheet.GetRange('Y21').SetValue('Test 15: Date Quarter 4');

// === PIVOT TABLE 16: Multiple Data Fields Test ===
let pivotTable16 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('I32'));
pivotTable16.AddFields({ rows: 'Region' });
let salesDataField16 = pivotTable16.AddDataField('Sales');
let profitDataField16 = pivotTable16.AddDataField('Profit'); // Second data field

let regionField16 = pivotTable16.GetPivotFields('Region');
regionField16.PivotFilters.Add("xlValueEquals", profitDataField16, 3800);

worksheet.GetRange('I31').SetValue('Test 16: Multi Data Fields - Profit = 3800');

// === PIVOT TABLE 17: Date Filter - Date Equals ===
let pivotTable17 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('M32'));
pivotTable17.AddFields({ rows: 'Date' });
pivotTable17.AddDataField('Sales');

let dateField17 = pivotTable17.GetPivotFields('Date');
dateField17.PivotFilters.Add("xlSpecificDate", null, new Date("15 January 2024")); // January 15, 2024

worksheet.GetRange('M31').SetValue('Test 17: Date Equals Jan 15, 2024');

// === PIVOT TABLE 18: Date Filter - Date Between ===
let pivotTable18 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('Q32'));
pivotTable18.AddFields({ rows: 'Date' });
pivotTable18.AddDataField('Quantity');

let dateField18 = pivotTable18.GetPivotFields('Date');
dateField18.PivotFilters.Add("xlAfter", null, new Date("1 Jun 2024")); // Jun 1, 2024

worksheet.GetRange('Q31').SetValue('Test 18: Date After Jun 1, 2024');

// === PIVOT TABLE 19: Date Filter - Date Between Whole Day===
let pivotTable19 = Api.InsertPivotExistingWorksheet(dataRange, worksheet.GetRange('U32'));
pivotTable19.AddFields({ rows: 'Date' });
pivotTable19.AddDataField('Quantity');

let dateField19 = pivotTable19.GetPivotFields('Date');
dateField19.PivotFilters.Add("xlDateBetween", null, new Date("1 March 2024"), new Date("31 May 2024"), true); // March 1 - May 31, 2024

worksheet.GetRange('U31').SetValue('Test 19: Date Between Mar-May 2024');
