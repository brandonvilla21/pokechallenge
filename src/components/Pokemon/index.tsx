import React, { FunctionComponent } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Tooltip
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import { withRouter, RouteComponentProps } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import { getTypes } from "../../utils";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 325,
    margin: "10px 0",
    cursor: 'pointer'
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  actions: {
    display: "flex"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

interface PokemonProps {
  name: string;
  url: string;
}

const Pokemon: FunctionComponent<PokemonProps & RouteComponentProps> = ({ name, history }) => {
  const classes = useStyles();
  const [data] = usePokemon(name)
  
  const goToPokemon = () => {
    history.push(`/pokemon/${name}`)
  }

  return (
    <Card className={classes.card} onClick={goToPokemon}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <Tooltip title="Base experience" style={{ cursor: "pointer" }}>
            <Typography variant="caption">{data.base_experience}</Typography>
          </Tooltip>
        }
        title={name}
        subheader={`Height: ${data.height} | Weight: ${data.weight}`}
      />
      {
        data.sprites && data.sprites.front_default &&
        <CardMedia
          className={classes.media}
          image={data.sprites.front_default}
          title={`Pokemon ${name}`}
        />
      }
      <CardContent>
        <Typography component="p">
          {
            `${name} posses ${data.abilities ? data.abilities.length : ""}
            abilities - This pokemon has ${data.moves ? data.moves.length : ""}
            different moves and its type(s) are: ${data.types ? getTypes(data.types) : ""}.`
          }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withRouter(Pokemon);
