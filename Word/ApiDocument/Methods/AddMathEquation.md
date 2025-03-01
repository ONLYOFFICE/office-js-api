# AddMathEquation

Adds a math equation to the current document.

## Syntax

```javascript
expression.AddMathEquation(sText, sFormat);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | An equation written as a linear text string. |
| sFormat | Optional | "unicode" \| "latex" | "unicode" | The format of the specified linear representation. |

## Returns

boolean

## Example

This example adds a math equation to the document.

```javascript editor-docx
let doc = Api.GetDocument();
doc.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");

```
