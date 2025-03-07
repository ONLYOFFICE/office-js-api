# GetElement

Returns a paragraph element using the position specified.

## Syntax

```javascript
expression.GetElement(nPos);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position where the element which content we want to get must be located. |

## Returns

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## Example

This example shows how to get a paragraph element using the position specified.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.RemoveAllElements();
let run = Api.CreateRun();
run.AddText("This is the text for the first text run. Do not forget a space at its end to separate from the second one. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the text for the second run. We will set it bold afterwards. It also needs space at its end. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the text for the third run. It ends the paragraph.");
paragraph.AddElement(run);
run = paragraph.GetElement(2);
run.SetBold(true);
```
