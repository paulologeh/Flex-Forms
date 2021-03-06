import React from "react";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";
import { TERMS, PRIVACY } from "navigation/CONSTANTS";

export const AppFooter = () => {
  return (
    <Segment inverted style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided stackable inverted columns="equal">
          <Grid.Column>
            <Header inverted as="h3" content="About" />
            <List link inverted>
              <List.Item as="a" href="https://github.com/paulologeh/Flex-Forms">
                Source Code
              </List.Item>
              <List.Item as="a">Contact</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h3" content="Help" />
            <List link inverted>
              <List.Item as="a">How does it work?</List.Item>
              <List.Item as="a">FAQs</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" inverted>
              Legal
            </Header>
            <List link inverted>
              <List.Item as="a" href={PRIVACY}>
                Privacy Policy
              </List.Item>
              <List.Item as="a" href={TERMS}>
                Terms and Conditions
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};
