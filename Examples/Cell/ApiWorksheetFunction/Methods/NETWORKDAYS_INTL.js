let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.NETWORKDAYS_INTL("8/1/2017", "9/1/2017", "0000011", "8/16/2017"));