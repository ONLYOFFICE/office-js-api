# GetClassType

Returns a type of the ApiGroup class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiGroup](../ApiGroup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"group"

## Example

This example gets a class type and pastes it into the sheet.

```javascript
let oWorksheet = Api.GetActiveSheet();
let oFill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oFill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape1 = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill1, oStroke, 0, 2 * 36000, 0, 3 * 36000);
let oShape2 = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill2, oStroke, 0, 15 * 36000, 0, 30 * 36000);

let oGroup = oWorksheet.GroupDrawings([oShape1, oShape2]);
let sClassType = oGroup.GetClassType();

let oDocContent1 = oShape1.GetDocContent();
let oParagraph1 = oDocContent1.GetElement(0);
oParagraph1.AddText("Class Type = " + sClassType);

let oDocContent2 = oShape2.GetDocContent();
let oParagraph2 = oDocContent2.GetElement(0);
oParagraph2.AddText("Class Type = " + sClassType);

```
