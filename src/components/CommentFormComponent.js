import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Label, Row, Col
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>

                <div className="row row-content">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)} >

                                <Row className="form-group">

                                    <Col>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors className="text-danger" model=".author" show="touched" messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 charaters or less'
                                        }}
                                        />
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col>
                                        <Label htmlFor="feedback">Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                                    </Col>
                                </Row>

                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}


export default CommentForm;