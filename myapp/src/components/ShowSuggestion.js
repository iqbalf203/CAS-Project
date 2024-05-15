import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Modal, Form, ListGroup, Badge } from 'react-bootstrap';
import SuggestionService from '../services/SuggestionService';
import CommentService from '../services/comment.service';
import { useSelector } from 'react-redux';

const ShowSuggestion = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentSuggestion, setCurrentSuggestion] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const user = useSelector(store => store.user.currentUser);
    const userId = user._id;

    useEffect(() => {
        fetchSuggestions();
    }, []);

    const fetchSuggestions = async () => {
        try {
            const response = await SuggestionService.getAllSuggestions();
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const fetchComments = async (suggestionId) => {
        try {
            const response = await CommentService.getCommentsBySuggestionId(suggestionId);
            setComments(response);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const handleShowComments = (suggestion) => {
        setCurrentSuggestion(suggestion);
        fetchComments(suggestion._id);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setComments([]);
        setCommentInput('');
    };

    const handleCommentInputChange = (e) => {
        setCommentInput(e.target.value);
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const newComment = {
                content: commentInput,
                creator: userId,
                suggestion: currentSuggestion._id
            };
            await CommentService.createComment(newComment);
            fetchComments(currentSuggestion._id); // Refresh comments after posting
            setCommentInput('');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const getStatusBadgeVariant = (status) => {
        switch (status) {
            case 'pending':
                return 'primary';
            case 'approved':
                return 'success';
            case 'rejected':
                return 'danger';
            default:
                return 'light';
        }
    };

    return (
        <Container>
            <Row className="mt-4">
                {suggestions.map((suggestion) => (
                    <Col sm={12} md={6} lg={4} className="mb-4" key={suggestion._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {suggestion.title} <Badge bg={getStatusBadgeVariant(suggestion.status)}>{suggestion.status}</Badge>
                                </Card.Title>
                                <Card.Text>{suggestion.description}</Card.Text>
                                <Card.Text><strong>Category:</strong> {suggestion.category}</Card.Text>
                                <Card.Text><strong>Creator:</strong> {suggestion.creator}</Card.Text>
                                <Button variant="link" onClick={() => handleShowComments(suggestion)}>
                                    Show Comments
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Comments for {currentSuggestion?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup className="mb-3">
                        {comments.length > 0 ? (
                            comments.map((comment) => (
                                <ListGroup.Item key={comment._id}>
                                    {comment.content}
                                </ListGroup.Item>
                            ))
                        ) : (
                            <ListGroup.Item>No comments yet</ListGroup.Item>
                        )}
                    </ListGroup>
                    <Form onSubmit={handleCommentSubmit}>
                        <Form.Group controlId="commentInput">
                            <Form.Control
                                type="text"
                                placeholder="Write a comment..."
                                value={commentInput}
                                onChange={handleCommentInputChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-2">
                            Post Comment
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ShowSuggestion;
