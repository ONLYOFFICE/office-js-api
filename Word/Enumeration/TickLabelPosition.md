# TickLabelPosition

Possible values for the position of chart tick labels (either horizontal or vertical).
**"none"** - not display the selected tick labels.
**"nextTo"** - sets the position of the selected tick labels next to the main label.
**"low"** - sets the position of the selected tick labels in the part of the chart with lower values.
**"high"** - sets the position of the selected tick labels in the part of the chart with higher values.

## Type

Enumeration

## Values

- "none"
- "nextTo"
- "low"
- "high"


## Example

This example sets the position of the vertical tick labels next to the main vertical label.

```javascript
chart.SetVertAxisTickLabelPosition("nextTo");
```
