import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { NomineeCard } from '../../component';
import { NomineeProps } from '../../interface/interface';

const Nominee: React.FC<NomineeProps> = ({ category }) => {
    const [selectedNominee, setSelectedNominee] = useState<string | null>(null);


    const handleNomineeClick = (nomineeId: string) => {
        setSelectedNominee(nomineeId === selectedNominee ? null : nomineeId);
    };
    return (
        <Grid item xs={12} md={12}>
            <Typography variant="h5" component="h2">
                {category.title}
            </Typography>
            <Grid container spacing={3}>
                {category.items.map((nominee) => (
                    <Grid key={nominee.id} item xs={12} sm={6} md={4}>
                        <NomineeCard
                            title={nominee.title}
                            photoUrl={nominee.photoUrL}
                            selected={nominee.id === selectedNominee}
                            onClick={() => handleNomineeClick(nominee.id)}
                        />
                    </Grid>
                ))}
            </Grid>


        </Grid>
    );
};

export default Nominee;
