import React, { useState, FunctionComponent } from "react";
import { Collapse } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: '10px 0'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  },
  expandHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    paddingLeft: '10px'
  },
  content: {
    padding: '10px'
  }
}));

interface SectionProps {
  title: string
  children: any
}

const Section: FunctionComponent<SectionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.expandHeader}>
        <Typography className={classes.title} variant="subtitle2">
          {title}
        </Typography>
        <IconButton
          id="icon-button"
          className={classnames(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={() => setExpanded(state => !state)}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </div>
      <Collapse className={classes.content} in={expanded} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </Paper>
  );
};

export default Section;
