import React, { useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import { Button, Modal } from "semantic-ui-react";
//import { Button, Popup } from "semantic-ui-react";
import { useQuery } from "react-query";
import "./Characters.css";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  //const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const { data, isLoading, error } = useQuery(["people", page], () =>
    fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) =>
      res.json()
    )
  );

  if (isLoading)
    return (
      <div>
        <Segment>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </div>
    );
  if (error) return <div>Error !</div>;

  const filtredItems = data.results.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="tabel">
      <div className="header">
        <Input
          icon="search"
          placeholder="Search..."
          className="input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Height</Table.HeaderCell>
            <Table.HeaderCell>Brith Day</Table.HeaderCell>
            <Table.HeaderCell>More info</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filtredItems.map((character) => (
            <Table.Row key={character.id}>
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
              <Table.Cell>{character.height}</Table.Cell>
              <Table.Cell>{character.birth_year}</Table.Cell>

              <Table.Cell>
                <Modal
                  centered={false}
                  open={selectedCharacter === character}
                  onClose={() => setSelectedCharacter(null)}
                  onOpen={() => setSelectedCharacter(character)}
                  trigger={<Button>Details</Button>}
                >
                  <Modal.Header>More info</Modal.Header>
                  <Modal.Content>
                    <Modal.Description>
                      Hair: {selectedCharacter?.hair_color}.
                      <br />
                      Eye: {selectedCharacter?.eye_color}.
                      <br />
                      Skin: {selectedCharacter?.skin_color}
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={() => setSelectedCharacter(null)}>
                      OK
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item
                  as="a"
                  icon
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a" active>
                  {page}
                </Menu.Item>
                <Menu.Item
                  as="a"
                  icon
                  disabled={data.next === null}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default Characters;

/*
import React, { useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { useQuery } from "react-query";
import "./Characters.css";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");

  const { data, isLoading, error } = useQuery(["people", page], () =>
    fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error !</div>;

  const filtredItems = data.results.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="tabel">
      <div className="header">
        <input
          className="input"
          type="text"
          value={value}
          placeholder="search"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Species</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filtredItems.map((character) => (
            <Table.Row key={character.id}>
              {console.log(character.id)}
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
              <Table.Cell>
                {<button onClick={() => {}}>DELETE</button>}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item
                  as="a"
                  icon
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a" active>
                  {page}
                </Menu.Item>
                <Menu.Item
                  as="a"
                  icon
                  disabled={data.next === null}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default Characters;

*/

//
//
//

/*
import React, { useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import { Button, Popup } from "semantic-ui-react";
import { useQuery } from "react-query";
import "./Characters.css";

const Characters = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");

  const { data, isLoading, error } = useQuery(["people", page], () =>
    fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) =>
      res.json()
    )
  );

  if (isLoading)
    return (
      <div>
        <Segment>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </div>
    );
  if (error) return <div>Error !</div>;

  const filtredItems = data.results.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="tabel">
      <div className="header">
        <Input
          icon="search"
          placeholder="Search..."
          className="input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Species</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filtredItems.map((character) => (
            <Table.Row key={character.id}>
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
              <Table.Cell>
                {
                  <Popup
                    trigger={<Button icon="delete" />}
                    content="Remove from array"
                    basic
                  />
                }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item
                  as="a"
                  icon
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a" active>
                  {page}
                </Menu.Item>
                <Menu.Item
                  as="a"
                  icon
                  disabled={data.next === null}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default Characters;
*/
