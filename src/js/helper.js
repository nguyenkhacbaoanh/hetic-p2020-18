// Function add or remove class after a check
export function setClassList(addClass, elementName, elementClassName) {
  if (addClass) {
    if (!elementName.classList.contains(elementClassName))
      elementName.classList.add(elementClassName);
  } else {
    if (elementName.classList.contains(elementClassName))
      elementName.classList.remove(elementClassName);
  }
}