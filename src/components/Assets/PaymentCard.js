import React from  "react";
import { Modal, ModalBody, Row, Col, Card, CardBody, Input, Button, ModalHeader, ModalFooter } from 'reactstrap';

export default class PaymentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }

    setModal = () => {
        const { changeToggleModal } = this.props;
        changeToggleModal(false);
    }

    render() {
        const { modal, card_info, modalType } = this.props;
        return (
            <Modal isOpen={modal} toggle={this.setModal} className="payment-dialog">
                <ModalHeader> {                    
                    modalType == 0 ?  <>                    
                        Add Payment Details
                    </>: <>
                        Edit Payment Details
                    </>}
                </ModalHeader>
                <ModalBody> 
                        {  
                            modalType == 0 ? <>
                                <div className="field-card-top field-nocard"><div></div>                                                      
                                    <div> XXXX XXXX XXXX XXXX </div>                                                      
                                    <div> XX/XXXX </div>                          
                                </div>
                                </> : <>
                                <div className="field-card-top field-visacard">                                                     
                                    <div> { card_info.card_num } </div>                                                      
                                    <div> { card_info.exp_date } </div>                          
                                </div>
                                </>
                        }                        
                        <div className="field-name field-main">           
                            <p>CardHolder's Full Name</p>                                             
                            <Input placeholder="Full Name" defaultValue={
                                modalType == 0 ? '' : card_info.card_name 
                            }></Input>
                        </div>
                        <div className="field-card-number field-main">           
                            <p>Card Number</p>                 
                            <Input placeholder="xxxx xxxx xxxx xxxx" defaultValue={
                                modalType == 0 ? '' : card_info.card_num 
                            }></Input>
                        </div>
                        <Row>
                            <Col sm="4" xs="4" className="field-main">  
                                <p>Exp.Date</p>                 
                                <Input placeholder="MM/YYYY" defaultValue={
                                    modalType == 0 ? '' : card_info.exp_date 
                                }></Input>
                            </Col>
                            <Col sm="4" xs="4" className="field-main">                                
                                <p>CVV</p>                 
                                <Input placeholder="MM/YYYY" defaultValue={
                                    modalType == 0 ? '' : card_info.CVV 
                                }></Input>
                            </Col>
                            <Col sm="4" xs="4" className="field-main">                      
                                <p>Area Code</p>                                                     
                                <Input placeholder="MM/YYYY" defaultValue={
                                    modalType == 0 ? '' : card_info.area_code 
                                }></Input>
                            </Col>
                        </Row> 
                </ModalBody>
                <ModalFooter>
                    <Button>{
                        modalType == 0 ?  <>                    
                            Add Card
                            </>: <>
                            Confirm Details
                            </>
                        }
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}