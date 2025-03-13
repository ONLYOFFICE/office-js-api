// This example sets the border which shall be displayed at the right of the table cell.

// How to set cell right border with its fill color.

// Create table and set its cell right border.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oCell.SetCellBorderRight(2, oFill);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);