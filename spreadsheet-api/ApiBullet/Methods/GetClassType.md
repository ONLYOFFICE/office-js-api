# GetClassType

Returns a type of the ApiBullet class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiBullet](../ApiBullet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"bullet"

## Example

This example shows how to get a type of the ApiBullet class and insert it into the table.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let bullet = Api.CreateNumbering("ArabicParenR", 1);
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
paragraph = Api.CreateParagraph();
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
docContent.Push(paragraph);
let classType = bullet.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
docContent.Push(paragraph);
```
