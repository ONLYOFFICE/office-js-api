let worksheet = Api.GetActiveSheet();
let activeCell = worksheet.GetActiveCell();
activeCell.SetValue("This sample text was placed in an active cell.");