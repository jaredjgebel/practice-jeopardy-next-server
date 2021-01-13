import Head from "next/head";

import Clue from "../../components/Clue";
import { parseClueIds, parseClues } from "../../data/getClues";
import { setCluePaths } from "../../data/setCluePaths";

export async function getStaticPaths() {
  const clueIds = parseClueIds();

  const paths = clueIds.map((id) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const clues = parseClues();
  const clueData = clues.find((clue) => clue.id.toString() === params.id);

  const { prevClueId, nextClueId } = setCluePaths(
    clues,
    clueData.id.toString()
  );

  return {
    props: {
      clue: clueData,
      prevClueId,
      nextClueId,
    },
  };
}

export default function CluePage({ clue, prevClueId, nextClueId }) {
  return (
    <>
      <Head>
        <title>Practice Jeopardy! - {clue.category}</title>
      </Head>

      <Clue clue={clue} prevClueId={prevClueId} nextClueId={nextClueId} />
    </>
  );
}
