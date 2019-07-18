import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import BlogForm from '../pages/blog/blog-form'

    export default class BlogDetail extends Component{
        constructor(props){
            super(props);

            this.state = {
                currentId: this.props.match.params.slug,
                blogItem: {},
                editMode: false
            }
            this.handleEditClick = this.handleEditClick.bind(this)
            this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind(this);
        }

        handleFeaturedImageDelete(){
            this.setState({
            blogItem: {
                featured_image_url: ''
            }
        })
        }

        handleEditClick() {
            console.log('handle edit clicked!')
            this.setState({editMode: true})
        }

        getBlogItem() {
            axios.get(`https://garygooch.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}}`
            ).then(response =>{
                this.setState({
                    blogItem: response.data. portfolio_blog
                })
            }).catch(error =>{
                console.log('getblogitem error ', response)
            })

        }
            componentDidMount() {
                this.getBlogItem();
            }



        render(){
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem;

        const contentManager = () => {
            if (this.state.editMode) {
                return <BlogForm handleFeaturedImageDelete={this.handleFeaturedImageDelete} editMode={this.state.editMode} blog={this.state.blogItem}/>
            } else {
                return(
                <div className='content-container'>
                <h1 onClick={this.handleEditClick}>{title}</h1>
                <img className='featured-image-wrapper' src={featured_image_url}/>
                <div className='content'>{ReactHtmlParser(content)}</div>
                </div>
                )}
        }

        return(
            <div className='blog-container'>
                {contentManager()}
            </div>
        )
    }
    }
