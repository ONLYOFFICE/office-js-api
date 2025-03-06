# TickLabelPosition

Possible values for the position of chart tick labels (either horizontal or vertical).\n-**"none"** - not display the selected tick labels.\n-**"nextTo"** - sets the position of the selected tick labels next to the main label.\n-**"low"** - sets the position of the selected tick labels in the part of the chart with lower values.\n-**"high"** - sets the position of the selected tick labels in the part of the chart with higher values.

## Type

Enumeration

## Values

- "none"
- "nextTo"
- "low"
- "high"


## Example

This example sets the position of the vertical tick labels next to the main vertical label.

```javascript editor-docx
chart.SetVertAxisTickLabelPosition("nextTo");
```
