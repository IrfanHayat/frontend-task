import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Nominee } from '../../container';
import axios from 'axios';
import { Modal } from '../../component';

const NomineeGrid: React.FC = () => {
    const [nomineeData, setNomineeData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        if (process.env.REACT_APP_API_SERVER) {
            axios.get(process.env.REACT_APP_API_SERVER)
                .then(response => {
                    setNomineeData(response.data.items);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } else {
            console.error("REACT_APP_API_SERVER is undefined");
        }

    }, []);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    return (
        <div style={{ padding: '16px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Movie Awards Nominees
            </Typography>
            <Grid container spacing={3}>
                {nomineeData?.map((category: any) => (
                    <Nominee key={category.id} category={category} />
                ))}
            </Grid>
            <Button variant="contained" color="primary" sx={{ mt: 1 }} onClick={handleOpenModal}>
                Submit Ballot Button
            </Button>

            {/* Use the imported Modal component */}
            <Modal isVisible={modalOpen} onClose={handleCloseModal}>
                <Typography sx={{ color: "black" }} variant="h6">Success</Typography>
            </Modal>
        </div>
    );
};

export default NomineeGrid;
