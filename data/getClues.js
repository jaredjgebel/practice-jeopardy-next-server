import clues from "../data/clues.json";
import clueIds from "../data/clueIds.json";

export const parseClues = () => {
  return clues
    .map((clue) => {
      if (clue.invalid_count || clue.question === "" || !clue.value) {
        return null;
      }

      return {
        id: clue.id,
        answer: clue.answer,
        question: clue.question,
        value: clue.value,
        airdate: clue.airdate,
        created_at: clue.created_at,
        updated_at: clue.updated_at,
        category: clue.category.title,
        category_id: clue.category_id,
      };
    })
    .filter((clue) => !(clue === null));
};

export const parseClueIds = () => {
  return clueIds;
};
