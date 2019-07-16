import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import BlogForm from '../pages/blog/blog-form';

ReactModal.setAppElement('.app-wrapper')

export default class BlogModal extends Component{
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                marginRight: "-50%",
                transform: 'translate(-50%, -50%',
                width: '800px'
            },
            overlay: {
                backgroundColor: 'rgba(1,1,1, 0.55'
            }
        };
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);

    }
    handleSuccessfulFormSubmission(blog) {
        this.props.handleSuccessfulNewBlogSubmission(blog)
    }



    render(){
        return(
            <ReactModal
            style={this.customStyles}  
            onRequestClose={() => {
                this.props.handleModalClose();
            }} isOpen={this.props.modalIsOpen}>
                <BlogForm 
                handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
               
                />
            
            <div className='kiwi-burd'><FontAwesomeIcon icon='bug' spin/></div>
            <div className='kiwi-burd'><FontAwesomeIcon icon='kiwi-bird' pulse/></div>            
            <div className='kiwi-burd'><FontAwesomeIcon icon='bug' pulse/></div>
            <div className='kiwi-burd'><FontAwesomeIcon icon='kiwi-bird' spin/></div>

                </ReactModal>

               

        )
    }
}