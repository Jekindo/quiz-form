export default function getSelectCorrectAnswerButtonsComponents() {
  const selectCorrectAnswerButtons = document.querySelectorAll(
    'button[data-action="select-correct-answer"]'
  );

  const buttonComponents = [...selectCorrectAnswerButtons].map(btn => {
    const btnComponents = [];

    btnComponents.push(btn);

    [...btn.children].forEach(component => {
      btnComponents.push(component);

      if (component.children) {
        btnComponents.push(...component.children);
      }
    });

    return btnComponents;
  });

  return buttonComponents;
}
