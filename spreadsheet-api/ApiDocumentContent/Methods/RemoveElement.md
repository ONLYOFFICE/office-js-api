# RemoveElement

Removes an element using the position specified.

## Syntax

```javascript
expression.RemoveElement(nPos);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The element number (position) in the document or inside other element. |

## Returns

This method doesn't return any data.

## Example

This example removes an element using the position specified.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is paragraph #1.");
for (let paraIncrease = 1; paraIncrease < 5; ++paraIncrease) {
    paragraph = Api.CreateParagraph();
    paragraph.AddText("This is paragraph #" + (paraIncrease + 1) + ".");
    content.Push(paragraph);
}
content.RemoveElement(2);
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed paragraph #3, check that out above.");
content.Push(paragraph);
```
