import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
// TODO: Implement steps and allow to 
export function FormRequest() {
    return (
        <Container>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Name"/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="DPI"
                className="mb-3"
            >
                <Form.Control type="number" placeholder="DPI"/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="Email"/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Request"
                className="mb-3"
            >
                <Form.Control as="textarea" style={{ height: '100px', resize: 'none' }} placeholder="Request"/>
            </FloatingLabel>
            <Form.Group>
                <Form.Check>
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                        {/* TODO: Check this on click */}
                        I accept terms and conditions.
                    </Form.Check.Label>
                </Form.Check>
            </Form.Group>
            <Button variant="primary" type="submit">
                Request information
            </Button>
        </Container>
    )
}