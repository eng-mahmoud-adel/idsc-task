import React, { useState } from 'react';
import { Tabs, Tab, Form, Row, Col } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import BaseButton from '../../buttons/Button';
import { useTranslation } from 'react-i18next';
import './searchTabs.css';

const SearchTabs = ({ tabsKeys }) => {
    const [keys, setKeys] = useState(tabsKeys);
    const [activeKey, setActiveKey] = useState(keys[0]);

    const { t } = useTranslation();

    return (
        <Tabs
            id="searchTabs"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            className="searchTabs border-bottom-0"
        >
            {keys.map(key => 
                <Tab eventKey={key} title={key} key={key}>
                    <Form className="container">
                        <Row className="mb-3">
                            <Form.Group as={Col} className="tab col-6 col-md-3">
                                <Form.Label>{t("job")}</Form.Label>
                                <Form.Control type="text" placeholder="Job title, Keywords" />
                            </Form.Group>
                            <Form.Group as={Col} className="tab col-6 col-md-3">
                                <Form.Label>{t("location")}</Form.Label>
                                <Form.Control type="text" placeholder="City, province or region" />
                            </Form.Group>
                            <Form.Group as={Col} className="tab col-6 col-md-3">
                                <Form.Label>{t("category")}</Form.Label>
                                <Form.Select defaultValue="Select Industry">
                                    <option value="" disabled>Select Industry</option>
                                    <option>industry 1</option>
                                    <option>industry 2</option>
                                    <option>industry 3</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} className="col-6 col-md-3">
                                <BaseButton variant="primary" type="submit" className="submit w-100" leftIcon={<BiSearch className="me-2" size={25} />}>
                                    {t("search")}
                                </BaseButton>
                            </Form.Group>   
                        </Row>
                    </Form>
                </Tab>
            )}
        </Tabs>
    )
}

export default SearchTabs;
