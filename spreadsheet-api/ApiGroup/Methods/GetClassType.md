# GetClassType

Returns a type of the ApiGroup class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiGroup](../ApiGroup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"group"

## Example

This example gets a class type and pastes it into the sheet.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape1 = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill1, stroke, 0, 2 * 36000, 0, 3 * 36000);
let shape2 = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill2, stroke, 0, 15 * 36000, 0, 30 * 36000);

let group = worksheet.GroupDrawings([shape1, shape2]);
let classType = group.GetClassType();

let content1 = shape1.GetDocContent();
let paragraph1 = content1.GetElement(0);
paragraph1.AddText("Class Type = " + classType);

let content2 = shape2.GetDocContent();
let paragraph2 = content2.GetElement(0);
paragraph2.AddText("Class Type = " + classType);

```
