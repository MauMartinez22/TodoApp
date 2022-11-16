import React from 'react';
import'../assets/form.css'
import { Button, Modal, ModalContent,Form, Dropdown, Label  } from 'semantic-ui-react'

const FormInput = ({setModal}) => {

    const options = [
        {
            key: 'Jenny Hess',
            value: 'Jenny Hess',
            image: <Label circular color="green" empty />
            },
            {
            key: 'Elliot Fu',
            value: 'Elliot Fu',
            image: <Label circular color="blue" empty />
            },
            {
            key: 'Stevie Feliciano',
            value: 'Stevie Feliciano',
            image: <Label circular color="red" empty />
            }
    ]

    return (
    <Modal
        onOpen={() => setModal(true)}
        open={Modal}
    >
        <Modal.Header>Select a Photo</Modal.Header>
        <ModalContent>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
            </Form>
            <Dropdown
            selection
            options={options}
            simple item
            compact
            defaultValue={options[1]}
            />
        </ModalContent>    
        <Modal.Actions>
        <Button color='black' onClick={() => setModal(false)}>
            Nope
        </Button>
        <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setModal(false)}
            positive
        />
        </Modal.Actions>
    </Modal>
    );
};

export default FormInput;