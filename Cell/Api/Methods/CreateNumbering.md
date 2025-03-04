# CreateNumbering

Creates a bullet for a paragraph with the numbering character or symbol specified with the numType parameter.

## Syntax

```javascript
expression.CreateNumbering(numType, startAt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| numType | Required | [BulletType](../../Enumeration/BulletType.md) |  | The numbering type the paragraphs will be numbered with. |
| startAt | Required | number |  | The number the first numbered paragraph will start with. |

## Returns

[ApiBullet](../../ApiBullet/ApiBullet.md)

## Example

This example creates a bullet for a paragraph with the numbering character or symbol specified with the sType parameter.

```javascript editor-xlsx
// How to create a numbered paragraphs or sentences.

// Create number bullets to number paragraphs.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oBullet = Api.CreateNumbering("ArabicParenR", 1);
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");
oParagraph = Api.CreateParagraph();
oParagraph.SetBullet(oBullet);
oParagraph.AddText(" This is an example of the numbered paragraph.");
oDocContent.Push(oParagraph);
```
