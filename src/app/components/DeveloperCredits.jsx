import React from "react";

import { Anchor, Container } from "@mantine/core";

function DeveloperCredits() {
  return (
    <Container ta="center" my={100}>
      <footer>
        Developed by{" "}
        <Anchor href="https://www.tanaypatel.dev">
          <strong>Tanay Patel </strong>
          (Full stack developer)
        </Anchor>
      </footer>
    </Container>
  );
}

export default DeveloperCredits;
