import '../styles/how-to-write.css';
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

interface HowToWriteProps {
    onHide: () => void;
}

export function HowToWrite(props: HowToWriteProps) {
    const { t } = useTranslation();
    return (
        <Modal show={true} onHide={props.onHide}>
            <Modal.Body className="how-to-write">
                <div className="how-to-write_title">
                    {t('how_to_write_my_request')}
                </div>
                <div className="how-to-write_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget. Tempus egestas sed sed risus pretium quam. Aliquet nibh praesent tristique magna. Ullamcorper sit amet risus nullam eget felis eget nunc. Integer enim neque volutpat ac. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Egestas dui id ornare arcu. Et netus et malesuada fames ac turpis egestas integer. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Faucibus pulvinar elementum integer enim. Sed pulvinar proin gravida hendrerit lectus. Vitae semper quis lectus nulla at volutpat. Phasellus egestas tellus rutrum tellus pellentesque. Ac turpis egestas sed tempus urna et pharetra pharetra. Rutrum quisque non tellus orci ac auctor. Quis varius quam quisque id diam.
                </div>
                <div className="how-to-write_actions">
                    <Button variant='primary' onClick={props.onHide}>
                        {t('understood')}
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}