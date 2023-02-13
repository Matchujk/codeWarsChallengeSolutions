function countPositivesSumNegatives(input) {
  if (input?.length === 0 || input === null) {
    return [];
  }
  const positives = input.filter(x => x > 0)?.length;
  const negatives = input.filter(x => x < 0).reduce((acc, el) => acc + el, 0);
  return [positives, negatives];
}
