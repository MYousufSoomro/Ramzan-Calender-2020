import React from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        maxWidth: 345
    }
});
function CardCompo(props) {
    const { classes, CityName, CityImage, CityPath, CityTitle, onClick } = props;
    return (
        <Link onClick={onClick} to={CityPath} style={{ textDecoration: "none" }}>
            <div style={{ display: 'inline-flex', margin: 10, }}>
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={CityImage}
                            title={CityTitle}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {CityName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Link>
    );
}
CardCompo.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CardCompo);