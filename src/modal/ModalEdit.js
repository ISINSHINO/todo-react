import React from 'react';
import {Box, Typography, Modal, Button, Grid} from "@mui/material";

const ModalEdit = ({task, handleClose, openEditModal}) => {

    const style = {
        fontFamily: "Roboto",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


    return (
            <Modal
                open={openEditModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Editing task details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Current task name is: {task.name}
                        <br/>
                        Current task status is: {task.isDone? "Completed" : "Not completed"}
                    </Typography>
                    <Grid container
                          justifyContent={"flex-end"}
                    >
                        <Button onClick={handleClose}>Close</Button>
                        <Button>Confirm edit</Button>
                    </Grid>
                </Box>
            </Modal>
    );
};

export default ModalEdit;