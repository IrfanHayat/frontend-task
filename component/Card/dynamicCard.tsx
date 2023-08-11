import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NomineeCardProps } from '../../interface';

const useStyles = makeStyles({
    card: {
        background: '#009B86',
        color: '#FFFFFF',
        transition: 'background-color 0.3s, color 0.3s',
        '&:hover': {
            background: '#34AC9C',
            color: '#CCCCCC',
        },
    },
    selectedCard: {
        background: 'blue',
        color: '#FFFFFF',
    },
    selectButton: {
        marginTop: '10px', // Adjust margin as needed
        background: 'Red',
        color: '#FFFFFF',
        '&:hover': {
            background: '#009B86',
            color: '#CCCCCC',
        },
    },
});

const NomineeCard: React.FC<NomineeCardProps> = ({ title, photoUrl, selected, onClick }) => {
    const classes = useStyles();

    return (
        <Card className={`${classes.card} ${selected ? classes.selectedCard : ''}`}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {title}
                    </Typography>
                </CardContent>
                <CardMedia component="img" height="140" image={photoUrl} alt={title} />
                <Button className={classes.selectButton} onClick={onClick}>
                    Select Button
                </Button>
            </CardActionArea>
        </Card>
    );
};

export default NomineeCard;
