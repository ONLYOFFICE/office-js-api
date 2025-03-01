# SetBullet

Sets the bullet or numbering to the current paragraph.

## Syntax

```javascript
expression.SetBullet(oBullet);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | Required | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | The bullet object created with the &#123;@link Api#CreateBullet&#125; or &#123;@link Api#CreateNumbering&#125; method. |

## Returns

This method doesn't return any data.

## Example

This example sets the bullet or numbering to the current paragraph.

```javascript editor-xlsx
// How to add a dash bullet to the paragraph.

// Numbering and adding custom bullet points to the text.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
var oBullet = Api.CreateBullet("-");
oParaPr.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the bulleted paragraph.");
```
