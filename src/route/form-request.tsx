import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
// TODO: Implement steps and allow to 
export function FormRequest() {
    const { t } = useTranslation();
    return (
        <Container>
            <FloatingLabel
                controlId="floatingInput"
                label={t('name')}
                className="mb-3"
            >
                <Form.Control type="text" placeholder={t('name')}/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label={t('dpi')}
                className="mb-3"
            >
                <Form.Control type="number" placeholder={t('dpi')}/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label={t('email')}
                className="mb-3"
            >
                <Form.Control type="email" placeholder={t('email')}/>
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label={t('requested_information')}
                className="mb-3"
            >
                <Form.Control as="textarea" style={{ height: '100px', resize: 'none' }} placeholder={t('requested_information')}/>
            </FloatingLabel>
            <Form.Group>
                <Form.Check>
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>
                        {/* TODO: Check this on click */}
                        {t('accept')} <strong>{t('terms')}</strong>
                    </Form.Check.Label>
                </Form.Check>
            </Form.Group>
            <Button variant="primary" type="submit">
                {t('request_information')}
            </Button>
        </Container>
    )
}