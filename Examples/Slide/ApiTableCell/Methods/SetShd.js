// This example specifies the shading which shall be applied to the extents of the current table cell.

// How to set shading fill to the cell.

// Create table and set its cell shading color.

var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oCell.SetShd(oFill);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);