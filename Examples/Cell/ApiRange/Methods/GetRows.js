// Access individual rows within a range to update their values in a spreadsheet.

// How do I iterate over each row in a range and set its value in a spreadsheet?

// Fill a multi-row range by writing a different value into each row one at a time in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("1:3");
for (let i=1; i <= 3; i++) {
	let rows = range.GetRows(i);    
	rows.SetValue(i);
}