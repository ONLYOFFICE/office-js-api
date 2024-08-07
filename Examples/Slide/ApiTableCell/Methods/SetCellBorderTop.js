// This example sets the border which shall be displayed at the top of the table cell.
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oCell.SetCellBorderTop(2, oFill);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);