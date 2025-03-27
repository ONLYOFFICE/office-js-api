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
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let bullet = Api.CreateNumbering("ArabicParenR", 1);
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the numbered paragraph.");
paragraph = Api.CreateParagraph();
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the numbered paragraph.");
docContent.Push(paragraph);
```
