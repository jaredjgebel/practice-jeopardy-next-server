export function setCluePaths(clues, id) {
  const clueData = clues.find((clue) => clue.id.toString() === id);

  const clueIndex = clues.findIndex((clue) => clue.id === clueData.id);

  const first = 0;
  const last = clues.length - 1;

  const prevClueIndex = clueIndex === first ? last : clueIndex - 1;
  const nextClueIndex = clueIndex === last ? first : clueIndex + 1;

  const prevClueId = clues[prevClueIndex].id;
  const nextClueId = clues[nextClueIndex].id;

  return { prevClueId, nextClueId };
}
