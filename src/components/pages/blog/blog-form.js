import React, { Component } from "react";
import axios from 'axios';
import RichTextEditor from '../../forms/rich-text-editor';
import DropzoneComponent from 'react-dropzone-component';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            blog_status: '',
            content: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig =this.djsConfig.bind(this);
        this.handleFeaturedImageDrop + this.handleFeaturedImageDrop.bind(this);

    }
    djsConfig(){
        return{
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    componentConfig() {
        return {
            iconFiletypes: ['.jpg','.png'],
            showFiletypeIcon: true,
            postUrl: 'https://httpbin.org/post'
        }
    }

    handleFeaturedImageDrop() {
        return {
            addedfile: file => this.setState({ featured})
        }
    }

    handleRichTextEditorChange(content) {
        this.setState({content});


    }

    buildForm() {
        let formData = new FormData();

        formData.append('portfolio_blog[title]', this.state.title)
        formData.append('portfolio_blog[blog_status]', this.state.blog_status)
        formData.append("portfolio_blog[content]", this.state.content);

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        axios.post("https://garygooch.devcamp.space/portfolio/portfolio_blogs", 
        this.buildForm(), 
        {withCredentials: true}
        ).then(response =>{ this.setState({
            title: '',
            blog_status: '',
            content: ''
        })
            this.props.handleSuccessfulFormSubmission(
                response.data.portfolio_blog);           
        }).catch(error =>{
            console.log('handleSubmit for blog error', error)
        })
        this.props.handleSuccessfulFormSubmission(this.state);
        event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='blog-form-wrapper'>
        <input 
        type='text'
        onChange={this.handleChange} 
        name='title'
        placeholder='Title'
        value={this.state.title}/>
        
        
        <input 
        type='text'
        onChange={this.handleChange} 
        name='blog_status'
        placeholder='Blog Status'
        value={this.state.blog_status}/>

        <RichTextEditor handleRichTextEditorChange={this.handleRichTextEditorChange}/>

        <button className='btn'>Save</button>
        
      </form>
    );
  }
}