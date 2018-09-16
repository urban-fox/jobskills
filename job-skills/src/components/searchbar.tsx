import {AppBar, Input, Toolbar, Typography} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';

export class SearchBar extends React.Component {
  public render() {

    return (
      <AppBar position="static">
        <Toolbar>
            <Typography variant="display2" color="inherit">
              Job Skills
            </Typography>

            <SearchIcon />
            <Input
              placeholder="Search…"
              disableUnderline={true}

            />
        </Toolbar>
      </AppBar>
    );
  };
}