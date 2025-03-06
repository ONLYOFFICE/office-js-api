# SetSpacingAfter

Sets the spacing after the current paragraph. If the value of the isAfterAuto parameter is true, then \
any value of the nAfter is ignored. If isAfterAuto parameter is not specified, then it \
will be interpreted as false.

## Syntax

```javascript
expression.SetSpacingAfter(nAfter, isAfterAuto);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAfter | Required | [twips](../../Enumeration/twips.md) |  | The value of the spacing after the current paragraph measured in twentieths of a point (1/1440 of an inch). |
| isAfterAuto | Optional | boolean | false | The true value disables the spacing after the current paragraph. |

## Returns

This method doesn't return any data.

## Example

This example sets the spacing after the current paragraph.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingAfter(1440);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
content.Push(paragraph);
```
