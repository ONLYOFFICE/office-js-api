# TofPr

Table of figures properties.

## Type

Object

## Properties

| **Name** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| ShowPageNums | Boolean | Specifies whether to show page numbers in the table of figures. |
| RightAlgn | Boolean | Specifies whether to right-align page numbers in the table of figures. |
| LeaderType | [TocLeader](./TocLeader.md) | The leader type in the table of figures. |
| FormatAsLinks | Boolean | Specifies whether to format the table of figures as links. |
| BuildFrom | [CaptionLabel](./CaptionLabel.md) &#124; string | Specifies whether to generate the table of figures based on the specified caption label or the paragraph style name used (for example, "Heading 1"). |
| LabelNumber | Boolean | Specifies whether to include the label and number in the table of figures. |
| TofStyle | [TofStyle](./TofStyle.md) | The table of figures style type. |

## Example

This example adds a table of figures with the specified properties to the document.

```javascript
var oTofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
oDocument.AddTableOfFigures(oTofPr);
```