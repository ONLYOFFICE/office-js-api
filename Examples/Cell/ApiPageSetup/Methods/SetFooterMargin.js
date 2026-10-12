// Set the distance from the bottom of the page to the footer for printing in a spreadsheet.

// How do I change the footer margin (distance from the page edge to the footer) in a spreadsheet?

// Move the footer closer to or further from the bottom edge of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFooterMargin(12.7);
