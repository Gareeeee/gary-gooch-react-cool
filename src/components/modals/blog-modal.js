import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"


export default class BlogModal extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ReactModal  onRequestClose={() => {
                this.props.handleModalClose();
            }} isOpen={this.props.modalIsOpen}>

            


                <h1>IM A MODAL</h1>
                <div className='content-loader'><FontAwesomeIcon icon='kiwi-bird' pulse/></div>
            </ReactModal>

        )
    }
}