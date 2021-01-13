import React from "react";
import Link from "next/link";
import {
  Button,
  chakra,
  Flex,
  Grid,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

function SmallMediaHeader({ category, airdate, value }) {
  return (
    <chakra.div height="150px">
      <Flex justifyContent="space-between">
        <nav className="menu-nav" aria-labelledby="menu-navigation">
          <Link href="/">
            <Button leftIcon={<ArrowBackIcon />}>Back</Button>
          </Link>
        </nav>

        <chakra.section
          display="flex"
          flexDirection="column"
          alignItems="right"
          textAlign="right"
        >
          <Heading as="h2" size="md" fontWeight="normal">
            ${value}
          </Heading>

          <Text size="md">
            {`Aired`}{" "}
            <time>{`${new Date(Date.parse(airdate))}`.slice(0, -42)}</time>
          </Text>
        </chakra.section>
      </Flex>

      <Flex justifyContent="center">
        <Heading
          as="h1"
          textAlign="center"
          textTransform="uppercase"
          size="xl"
          fontWeight="normal"
          padding={4}
          paddingBottom={16}
        >
          {category}
        </Heading>
      </Flex>
    </chakra.div>
  );
}

function MediumMediaHeader({ category, airdate, value }) {
  return (
    <Grid gridTemplateColumns="1fr 1fr 1fr" height="150px" gridGap="30px">
      <nav className="menu-nav" aria-labelledby="menu-navigation">
        <Link href="/">
          <Button leftIcon={<ArrowBackIcon />}>Back</Button>
        </Link>
      </nav>

      <Heading
        as="h1"
        textAlign="center"
        textTransform="uppercase"
        size="xl"
        fontWeight="normal"
      >
        {category}
      </Heading>

      <chakra.section
        display="flex"
        flexDirection="column"
        alignItems="right"
        textAlign="right"
      >
        <Heading as="h2" size="md" fontWeight="normal">
          ${value}
        </Heading>
        <Text size="md">
          {`Aired`}{" "}
          <time>{`${new Date(Date.parse(airdate))}`.slice(0, -42)}</time>
        </Text>
      </chakra.section>
    </Grid>
  );
}

function CurrentHeader({ value, airdate, category, size }) {
  const Header =
    size === "small" ? (
      <SmallMediaHeader value={value} airdate={airdate} category={category} />
    ) : (
      <MediumMediaHeader value={value} airdate={airdate} category={category} />
    );

  return <>{Header}</>;
}

function Header({ value, airdate, category }) {
  const size = useBreakpointValue({
    base: "small",
    md: "medium",
  });

  return (
    <CurrentHeader
      size={size}
      value={value}
      airdate={airdate}
      category={category}
    />
  );
}

export default Header;
