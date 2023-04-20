import { useQuery } from "react-query";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Characters.css";

import React, { useState } from "react";

const Characters = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery("people", () =>
    fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error !</div>;

  return (
    <div className="tabel">
      <TableContainer className="container" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Species</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.results.map((character) => (
              <TableRow key={character.id}>
                <TableCell component="th" scope="row">
                  {character.name}
                </TableCell>
                <TableCell>{character.gender}</TableCell>
                <TableCell>{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Characters;
