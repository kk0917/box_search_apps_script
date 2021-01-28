function searchBoxDocs(): void {
  const form = FormApp.getActiveForm();
  const items = form.getItems();

  items.forEach(item => {
    switch (item.getType()) {
      case FormApp.ItemType.CHECKBOX:
        const choices = item.asCheckboxItem().getChoices();

        choices.forEach(choice => Logger.log(choice.getValue()));
        break;

      default:
        break;
    }
  });

  doGet();
  Logger.log("Success!!");
}
