export default function getRemoveAnswerButtonsComponents() {
  const removeAnswerButtons = document.querySelectorAll(
    'button[data-action="remove-answer"]'
  );

  const buttonComponents = [...removeAnswerButtons].map(btn => {
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
