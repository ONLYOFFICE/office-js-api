# GetClassType

Returns a type of the ApiDocumentContent class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"documentContent"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let classType = content.GetClassType();
let paragraph = content.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
```
