import React from 'react';
import'../assets/form.css'
import { Button, Modal, ModalContent,Form, Dropdown, Label, Divider, Input  } from 'semantic-ui-react'

const FormInput = ({setModal,inputText, setInputText, taskList, setTaskList}) => {

    const options = [
            {
            key: 'Green',
            image: <Label circular color="green" empty />
            },
            {
            key: 'Blue',
            image: <Label circular color="blue" empty />
            },
            {
            key: 'Red',
            image: <Label circular color="red" empty />
            },
            {
            key: 'Purple',
            image: <Label circular color="purple" empty />
            }
    ]

    const handleInputText =(e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const handleSubmit= (e) => {
        
        setTaskList([
            ...taskList,{name:inputText, date:`${date}`, id: Math.random() *10, color: "#F8C4B4" }
        ])
        console.log(taskList)


    }


    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



//Time
    // const time = d.toLocaleString([],{
    // hour:'2-digit',
    // minute:'2-digit'
    // })


    return (
    <Modal
        onOpen={() => setModal(true)}
        open={Modal}
    >
        <Modal.Header>Select a Photo</Modal.Header>
        <ModalContent>
            <Form onSubmit={handleSubmit}>
                <Form.Field >
                    <label>Title</label>
                    <input onChange={handleInputText} placeholder='Task name title' />
                </Form.Field>
            </Form>
            <Input fluid placeholder='Content' />
            <Divider/>
            <Dropdown
                selection
                options={options}
                simple item
                compact
            />
        </ModalContent>    
        <Modal.Actions>
        <Button color='black' onClick={() => setModal(false)}>
            Nope
        </Button>
        <Button
            content="Save"
            labelPosition='right'
            icon='checkmark'
            onClick={() => {
                setModal(false)
                handleSubmit()
            }}
            positive
        />
        </Modal.Actions>
    </Modal>
    );
};

export default FormInput;