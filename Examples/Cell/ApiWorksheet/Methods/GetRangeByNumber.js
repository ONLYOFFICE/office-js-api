// Locate a cell using row and column numbers instead of letters in a spreadsheet.

// Pick cells by their numeric positions without using address notation in a spreadsheet?

// Enter data into a cell when you know only its row and column count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRangeByNumber(1, 2).SetValue("42");