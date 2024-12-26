# AddMathEquation

Adds a math equation to the current document.

## Syntax

expression.AddMathEquation(sText, sFormat);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | An equation written as a linear text string. |
| sFormat | Optional | "unicode" &#124; "latex" | "unicode" | The format of the specified linear representation. |

## Returns

This method doesn't return any data.

## Example

This example adds a math equation to the document.

```javascript
var oDocument = Api.GetDocument();
oDocument.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");

```