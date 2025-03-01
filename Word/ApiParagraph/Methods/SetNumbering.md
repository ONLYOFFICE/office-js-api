# SetNumbering

Specifies that the current paragraph references the numbering definition instance in the current document.

## Syntax

```javascript
expression.SetNumbering(oNumberingLevel);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oNumberingLevel | Required | [ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md) |  | The numbering level which will be used for assigning the numbers to the paragraph. |

## Returns

boolean