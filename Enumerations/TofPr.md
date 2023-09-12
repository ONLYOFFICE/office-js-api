# TofPr

Table of figures properties.

## Type

Object

## Properties

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- |
| ShowPageNums | Optional | Boolean | Specifies whether to show page numbers in the table of figures. Default value is "true". |
| RightAlgn | Optional | Boolean | Specifies whether to right-align page numbers in the table of figures. Default value is "true". |
| LeaderType | Optional | [TocLeader](./TocLeader.md) | The leader type in the table of figures. Default value is "dot". |
| FormatAsLinks | Optional | Boolean | Specifies whether to format the table of figures as links. Default value is "true". |
| BuildFrom | Optional | [CaptionLabel](./CaptionLabel.md) &#124; string | Specifies whether to generate the table of figures based on the specified caption label or the paragraph style name used (for example, "Heading 1"). Default value is "Figure". |
| LabelNumber | Optional | Boolean | Specifies whether to include the label and number in the table of figures. Default value is "true". |
| TofStyle | Optional | [TofStyle](./TofStyle.md) | The table of figures style type. Default value is "distinctive". |

## Example

This example adds a table of figures with the specified properties to the document.

```javascript
var oTofPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"};
oDocument.AddTableOfFigures(oTofPr);
```