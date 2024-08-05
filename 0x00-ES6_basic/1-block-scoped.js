export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // Using let ensures these variables are block-scoped
    let task2 = false; // Using let ensures these variables are block-scoped
  }

  return [task, task2];
}
