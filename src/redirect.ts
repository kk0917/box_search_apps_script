function doGet() {
  // return  HtmlService.createHtmlOutput(
  //   "<script>window.top.location.href='https://dachd.ent.box.com/folder/48285355410/search?isTrashSearch=0&metadata=&owners=&query=line&resinSessionID=251971d1d9614ff98692a8&types=&updatedTime=0&updatedTimeFrom=0&updatedTimeTo=0';</script>"
  // );

  const html = HtmlService.createHtmlOutputFromFile('Index');
  return FormApp.getUi().showModalDialog(html, 'title');
}