import React, { useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import "./Characters.css";

const Planets = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(["people", page], () =>
    fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) =>
      res.json()
    )
  );

  const deleteCharacterMutation = useMutation(
    (characterToDelete) => {
      const updatedResults = data.results.filter(
        (character) => character !== characterToDelete
      );
      queryClient.setQueryData(["people", page], {
        ...data,
        results: updatedResults,
      });
    },
    {
      onSuccess: () => {
        //refetch();
      },
    }
  );

  const deleteCharacter = (characterToDelete) => {
    deleteCharacterMutation.mutate(characterToDelete);
  };

  const filtredItems = data?.results?.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error !</div>;

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
          {filtredItems?.map((character) => (
            <Table.Row key={character.url}>
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => deleteCharacter(character)}
                  animated="vertical"
                >
                  <Button.Content hidden>Delete</Button.Content>
                  <Button.Content visible>
                    <Icon name="delete" />
                  </Button.Content>
                </Button>
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
                  disabled={data?.next === null}
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

export default Planets;

/*
import React, { useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import "./Characters.css";

const Planets = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(["people", page], () =>
    fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) =>
      res.json()
    )
  );

  const deleteCharacterMutation = useMutation((characterToDelete) => {
    const updatedResults = data.results.filter(
      (character) => character !== characterToDelete
    );
    queryClient.setQueryData(["people", page], {
      ...data,
      results: updatedResults,
    });
  });

  const deleteCharacter = (characterToDelete) => {
    deleteCharacterMutation.mutate(characterToDelete);
  };

  const filtredItems = data?.results?.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error !</div>;

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
          {filtredItems?.map((character) => (
            <Table.Row key={character.url}>
              <Table.Cell>{character.name}</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
              <Table.Cell>
                {
                  <button onClick={() => deleteCharacter(character)}>
                    DELETE
                  </button>
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
                  disabled={data?.next === null}
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

export default Planets;
*/
