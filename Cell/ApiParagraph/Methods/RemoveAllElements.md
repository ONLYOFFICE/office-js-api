# RemoveAllElements

Removes all the elements from the current paragraph.\
💡 When all the elements are removed from the paragraph, a new empty run is automatically created. If you want to add\
content to this run, use the [ApiParagraph#GetElement](../../ApiParagraph/Methods/GetElement.md) method.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes all the elements from the current paragraph.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the first text run in the current paragraph.");
paragraph.AddElement(run);
paragraph.RemoveAllElements();
run = Api.CreateRun();
run.AddText("We removed all the paragraph elements and added a new text run inside it.");
paragraph.AddElement(run);
content.Push(paragraph);
```
