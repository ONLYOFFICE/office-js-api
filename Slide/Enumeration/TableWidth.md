# TableWidth

The possible values for the units of the width property are defined by a specific table or table cell width property.**"auto"** - sets the table or table cell width to auto width.**"twips"** - sets the table or table cell width to be measured in twentieths of a point.**"nul"** - sets the table or table cell width to be of a zero value.**"percent"** - sets the table or table cell width to be measured in percent to the parent container.

## Type

Enumeration

## Values

- "auto"
- "twips"
- "nul"
- "percent"


## Example

This example sets the width of the table cell equal to 100 points (2000 twips).

```javascript editor-pptx
tableCell.SetWidth("twips", 2000);
```
