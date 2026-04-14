function CorrectText () {
    switch (window.Asc.plugin.info.editorType) {
        case 'word':
        case 'slide': {
            window.Asc.plugin.executeMethod ("GetSelectedText", [{"Numbering": false, "Math": false, "TableCellSeparator": '\n', "ParaSeparator": '\n', "TabSymbol": String.fromCharCode(9)}], function (data) {
                sText = data;
                ExecTypograf (sText);
            });
            break;
        }
        case 'cell': {
            window.Asc.plugin.executeMethod ("GetSelectedText", [{"Numbering": false, "Math": false, "TableCellSeparator": '\n', "ParaSeparator": '\n', "TabSymbol": String.fromCharCode(9)}], function (data) {
                if (data == '') {
                    sText = sText.replace (/\t/g, '\n');
                    ExecTypograf (sText);
                }
                else {
                    sText = data;
                    ExecTypograf (sText);
                }
            });
            break;
        }
    }
}