// This example freezes the specified range in top-and-left-most pane of the worksheet.
var oWorksheet = Api.GetActiveSheet();
var oFreezePanes = oWorksheet.GetFreezePanes();
var oRange = Api.GetRange('H2:K4');
oFreezePanes.FreezeAt(oRange);