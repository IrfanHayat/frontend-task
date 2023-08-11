import * as React from 'react';
import { Modal as MuiModal, Box, Button, Typography } from '@mui/material';
import { ModalProps } from '../../interface';


const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
    if (!isVisible) {
        return null;
    }
    return (
        <MuiModal open={isVisible} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 2, // Add rounded corners
                    width: '80%', // Increase the width
                    maxWidth: 500, // Set a maximum width
                    p: 4,
                }}
            >

                {children}
                <Button onClick={onClose}>Close</Button>
            </Box>
        </MuiModal>
    );
};

export default Modal;
