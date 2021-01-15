import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Button,
  Flex,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  SlideFade,
  useCheckbox,
  useDisclosure,
} from "@chakra-ui/react";

import FrontPage from "../components/FrontPage";
import DayPicker from "../components/DayPicker";
import { parseClueIds } from "../data/getClues";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export async function getServerSideProps() {
  const clueIds = parseClueIds();
  const randomClueId = clueIds[getRandomInt(clueIds.length)];

  return {
    props: {
      firstClueId: randomClueId.toString(),
    },
  };
}

export default function Home({ firstClueId }) {
  const { isOpen, onToggle } = useDisclosure();
  const [value, setValue] = React.useState("before");

  return (
    <>
      <Head>
        <title>Practice Jeopardy!</title>
      </Head>
      <FrontPage>
        <Flex direction="column" as="form" width="100%" padding="10px">
          <Button onClick={onToggle}>Filter clues</Button>
          <Flex direction="row">
            <SlideFade in={isOpen}>
              <Flex direction="column" justifyContent="center" padding="10px">
                <RadioGroup onChange={setValue} value={value}>
                  <Radio value="before" paddingX="10px">
                    Before
                  </Radio>
                  <Radio value="after" paddingX="10px">
                    After
                  </Radio>
                </RadioGroup>
                <DayPicker>{value}</DayPicker>
              </Flex>
            </SlideFade>
          </Flex>
        </Flex>
        <Link href={`/clues/${firstClueId}`} passHref>
          <Button color="dukeBlue">Start</Button>
        </Link>
      </FrontPage>
    </>
  );
}
