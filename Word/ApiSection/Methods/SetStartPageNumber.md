# SetStartPageNumber

Sets the start page number for the specified section.

## Syntax

```javascript
expression.SetStartPageNumber(nStartNumber);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStartNumber | Required | number |  | The start page number. |

## Returns

boolean

## Example

This example sets a custom start page index for section

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This section starts with second page number");
paragraph.AddPageBreak();
paragraph.AddText("Third page");
paragraph.AddPageBreak();
paragraph.AddText("Fourth page");
let section = paragraph.GetSection();
section.SetStartPageNumber(2);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
```
