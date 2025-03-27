# SetPageMargins

Specifies the page margins for all the pages in this section.

## Syntax

```javascript
expression.SetPageMargins(nLeft, nTop, nRight, nBottom);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | [twips](../../Enumeration/twips.md) |  | The left margin width measured in twentieths of a point (1/1440 of an inch). |
| nTop | Required | [twips](../../Enumeration/twips.md) |  | The top margin height measured in twentieths of a point (1/1440 of an inch). |
| nRight | Required | [twips](../../Enumeration/twips.md) |  | The right margin width measured in twentieths of a point (1/1440 of an inch). |
| nBottom | Required | [twips](../../Enumeration/twips.md) |  | The bottom margin height measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies the page margins for all the pages in this section.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with margins set. ");
paragraph.AddText("The left margin is 5 inches wide (7200 twentieths of a point). ");
paragraph.AddText("The top margin is 2 inches high (2880 twentieths of a point). ");
paragraph.AddText("The right margin is 1 inch wide (1440 twentieths of a point). ");
paragraph.AddText("The bottom margin is 4 inches high (5760 twentieths of a point). ");
let section = doc.GetFinalSection();
section.SetPageMargins(7200, 2880, 1440, 5760);
```
