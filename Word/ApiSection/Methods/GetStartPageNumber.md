# GetStartPageNumber

Returns the start page number of the specified section.

## Syntax

```javascript
expression.GetStartPageNumber();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example gets a start page index of section

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = paragraph.GetSection();
section.SetStartPageNumber(5);
let startPageNumber = section.GetStartPageNumber();
paragraph.AddText("The start page number for this section is: " + startPageNumber);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
```
