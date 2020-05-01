import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';


const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
});

function ButtonFullView(props) {
    const { classes, FullViewPath } = props;
    return (
        <Link to={FullViewPath} style={{ textDecoration: "none" }}>
            <center>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    size="large"
                >
                    View Full Calender
                </Button>
            </center>
        </Link>
    );
}
ButtonFullView.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ButtonFullView);