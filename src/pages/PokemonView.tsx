import React, { FunctionComponent, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { RouteComponentProps } from "react-router";
import usePokemon from "../hooks/usePokemon";
import Section from '../components/Section'
import { getTypes } from "../utils";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "2em",
    paddingBottom: "2em",
    padding: "0 1em"
  },
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  mainInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  },
  img: {
    width: "250px"
  },
  sections: {
    flex: 3,
    minWidth: '200px'
  },
  summary: {
    flex: 2,
    minWidth: '200px'

  }
}));

interface PokemonMatchParams {
  name: string;
}

const PokemonView: FunctionComponent<RouteComponentProps<PokemonMatchParams>> = ({ match }) => {
  const classes = useStyles();
  const [pokemon] = usePokemon(match.params.name);
  
  if (pokemon) {
    return (
      <Paper className={classes.root} elevation={1}>
        <div className={classes.wrapper}>
          <div className={classes.mainInfo}>
            {pokemon.sprites && (
              <img
                className={classes.img}
                src={pokemon.sprites.front_default}
                alt={pokemon.sprites.front_default}
              />
            )}

            <Typography variant="h5">
              {pokemon.name}
            </Typography>
            <Typography variant="subtitle2">
              {`Height: ${pokemon.height} | Weight: ${pokemon.weight}`}
            </Typography>
          </div>
          <div className={classes.summary}>
            <Typography variant="h5">
              Summary
            </Typography>
            <Typography variant="overline">
            {
              `${pokemon.name} posses ${pokemon.abilities ? pokemon.abilities.length : ""}
              abilities - This pokemon has ${pokemon.moves ? pokemon.moves.length : ""}
              different moves and its type(s) are: ${pokemon.types ? getTypes(pokemon.types) : ""}.`
            }
            </Typography>
          </div>
          <div className={classes.sections}>
              <Section title="Abilities">
                <ul>
                  {
                    pokemon.abilities &&
                    pokemon.abilities.map((ability: any, index: number) => (
                      <li key={`ability-${index}`}>
                        <Typography variant="overline">
                          {ability.ability.name} {ability.is_hidden && '(Hidden)'}
                        </Typography>
                      </li>
                    ))
                  }
                </ul>
              </Section>
              <Section title="Types">
                <ul>
                  {
                    pokemon.types &&
                    pokemon.types.map((type: any, index: number) => (
                      <li key={`type-${index}`}>
                        <Typography variant="overline">
                          {type.type.name}
                        </Typography>
                      </li>
                    ))
                  }
                </ul>
              </Section>
              <Section title="Moves">
                <ul>
                  {
                    pokemon.types &&
                    pokemon.moves.map((move: any, index: number) => (
                      <li key={`move-${index}`}>
                        <Typography variant="overline">
                          {move.move.name}
                        </Typography>
                      </li>
                    ))
                  }
                </ul>
              </Section>
          </div>
        </div>
      </Paper>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default PokemonView;
