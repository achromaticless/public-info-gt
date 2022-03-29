import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { isValidCUI } from "../util/is-valid-cui";
import { isValidEmail } from "../util/is-valid-email";
// import { HowToWrite } from "../layout/how-to-write";

interface InformationRequest {
    name: string;
    dpi: string;
    email: string;
    request: string;
    acceptTerms: boolean;
}

export function FormRequest() {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm<InformationRequest>({
        defaultValues: {
            name: '',
            dpi: '',
            email: '',
            request: '',
            acceptTerms: false,
        }
    });

    const onSubmit = (data: InformationRequest) => console.log(data); // TODO: Send request

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: '8px'}}
        >
            <Form.Group className="mb-3">
                <FloatingLabel
                    controlId="floatingInput"
                    label={t('name')}
                >
                    <Form.Control
                        type="text"
                        placeholder={t('name')}
                        autoFocus={true}
                        {...register(
                            'name',
                            {
                                required: true,
                            }
                        )}
                    />
                    {errors.name && (
                        <Form.Text>{t('required_field')}</Form.Text>
                    )}
                </FloatingLabel>
            </Form.Group>
            <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label={t('dpi')}
                    className="mb-3"
                >
                    <Form.Control
                        type="number"
                        placeholder={t('dpi')}
                        {...register('dpi', {
                            required: true,
                            validate: isValidCUI
                        })}
                    />
                    {errors.dpi && (
                        <Form.Text>{t('invalid_cui')}</Form.Text>
                    )}
                </FloatingLabel>
            </Form.Group>
            <Form.Group>
                <FloatingLabel
                    controlId="floatingInput"
                    label={t('email')}
                    className="mb-3"
                >
                    <Form.Control
                        type="email"
                        placeholder={t('email')}
                        {...register('email', {
                            required: true,
                            validate: isValidEmail
                        })}
                    />
                    {errors.email && (
                        <Form.Text>{t('invalid_email')}</Form.Text>
                    )}
                </FloatingLabel>
            </Form.Group>
            <Form.Group>
            <FloatingLabel
                controlId="floatingInput"
                label={t('requested_information')}
                className="mb-3"
            >
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px', resize: 'none' }}
                        placeholder={t('requested_information')}
                        {...register('request', { required: true })}
                    />
                    {errors.request && (
                        <Form.Text>{t('required_field')}</Form.Text>
                    )}
                    {/* <Form.Group>
                    <Form.Label
                        style={{ color: '#0b5ed7', cursor: 'pointer' }}
                        onClick={e => {
                            e.stopPropagation()
                            setShowHowToWriteMyRequest(!showHowToWriteMyRequest)
                        }}
                    >
                        {t('how_to_write_my_request')}
                    </Form.Label>
                </Form.Group> */}
                </FloatingLabel>
            </Form.Group>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    label={(<>{t('accept')} <strong>{t('terms')}</strong></>)}
                    {...register('acceptTerms', { required: true })}
                />
                {errors.acceptTerms && (
                        <Form.Text>{t('required_field')}</Form.Text>
                )}
                {/* <Form.Check>
                    <Form.Check.Input
                        type="checkbox"
                        checked={informationRequest.acceptTerms}
                        onChange={e => {
                            e.stopPropagation()
                            setInformationRequest({
                                ...informationRequest,
                                acceptTerms: !informationRequest.acceptTerms,
                            })
                        }}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                    <Form.Check.Label
                        onClick={e => {
                            e.stopPropagation()
                            setInformationRequest({
                                ...informationRequest,
                                acceptTerms: !informationRequest.acceptTerms,
                            })
                        }}
                        style={{
                            cursor: 'pointer'
                        }}
                    >
                        
                    </Form.Check.Label>
                </Form.Check> */}
            </Form.Group>
            <Form.Group className="d-grid gap-2">
                <Button
                    className="btn btn-primary"
                    variant="primary"
                    type="submit"
                    style={{
                        marginTop: '8px'
                    }}
                >
                    {t('request_information')}
                </Button>
            </Form.Group>
            {/* {showHowToWriteMyRequest && (
                <HowToWrite onHide={() => setShowHowToWriteMyRequest(false)} />
            )} */}
        </Form>
    )
}