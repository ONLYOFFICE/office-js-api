# TofPr

Table of figures properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| ShowPageNums | boolean | Specifies whether to show page numbers in the table of figures. |
| RightAlgn | boolean | Specifies whether to right-align page numbers in the table of figures. |
| LeaderType | [TocLeader](../Enumeration/TocLeader.md) | The leader type in the table of figures. |
| FormatAsLinks | boolean | Specifies whether to format the table of figures as links. |
| BuildFrom | [CaptionLabel](../Enumeration/CaptionLabel.md) \| string | Specifies whether to generate the table of figures based on the specified caption label or the paragraph style name used (for example, "Heading 1"). |
| LabelNumber | boolean | Specifies whether to include the label and number in the table of figures. |
| TofStyle | [TofStyle](../Enumeration/TofStyle.md) | The table of figures style type. |


## Example

This example adds a table of figures with the specified properties to the document.

```javascript editor-pptx
let tofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
doc.AddTableOfFigures(tofPr);
```
