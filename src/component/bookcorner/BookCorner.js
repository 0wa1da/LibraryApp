import React, { Component } from 'react';
import SearchBar from '../searchbox/SearchBox';
import BookView from '../bookview/BookView';
import './BookCorner.css';
export default class BookCorner extends Component {
    constructor() {
        super();
        this.state = {
            books:[
                {
                    id:0,
                    title:"The king of Drugs",
                    src:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
                },
                {
                    id:1,
                    title:"Before Sun Rise",
                    src:"https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1483134090134-QOJK8Q9CL5DMFN99XWQO/ke17ZwdGBToddI8pDm48kFjiq_0Ek1NItql1dLmsgNNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGQiKALUW-YxfFfP4p0PvHcTla7NnOOvQwSGt9YLKLGBhEym7bB5Y8EAaW-uC2HxJQ/Before-Sunrise.jpg"
                },
                {
                    id:2,
                    title:"The Method",
                    src:"https://thebookcoverdesigners.com/wp-content/uploads/2017/10/LP3850_The-Method_Shannon-Kirk.jpg"
                },
                {
                    id:3,
                    title:"The Hidden Fear",
                    src:"https://www.bookcoversart.com/wp-content/uploads/2017/05/Hidden-Fear-Premade-Thriller-Horror-Noir-Police-Story-Detective-Spy-Mystery-eBook-Book-Cover.jpg"
                },
                {
                    id:4,
                    title:"The king of Drugs",
                    src:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
                },
                {
                    id:5,
                    title:"Before Sun Rise",
                    src:"https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1483134090134-QOJK8Q9CL5DMFN99XWQO/ke17ZwdGBToddI8pDm48kFjiq_0Ek1NItql1dLmsgNNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGQiKALUW-YxfFfP4p0PvHcTla7NnOOvQwSGt9YLKLGBhEym7bB5Y8EAaW-uC2HxJQ/Before-Sunrise.jpg"
                },
                {
                    id:6,
                    title:"The Method",
                    src:"https://thebookcoverdesigners.com/wp-content/uploads/2017/10/LP3850_The-Method_Shannon-Kirk.jpg"
                },
                {
                    id:7,
                    title:"The Hidden Fear",
                    src:"https://www.bookcoversart.com/wp-content/uploads/2017/05/Hidden-Fear-Premade-Thriller-Horror-Noir-Police-Story-Detective-Spy-Mystery-eBook-Book-Cover.jpg"
                },
                {
                    id:8,
                    title:"The king of Drugs",
                    src:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
                },
                {
                    id:9,
                    title:"Before Sun Rise",
                    src:"https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1483134090134-QOJK8Q9CL5DMFN99XWQO/ke17ZwdGBToddI8pDm48kFjiq_0Ek1NItql1dLmsgNNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGQiKALUW-YxfFfP4p0PvHcTla7NnOOvQwSGt9YLKLGBhEym7bB5Y8EAaW-uC2HxJQ/Before-Sunrise.jpg"
                },
                {
                    id:10,
                    title:"The Method",
                    src:"https://thebookcoverdesigners.com/wp-content/uploads/2017/10/LP3850_The-Method_Shannon-Kirk.jpg"
                },
                {
                    id:11,
                    title:"The Hidden Fear",
                    src:"https://www.bookcoversart.com/wp-content/uploads/2017/05/Hidden-Fear-Premade-Thriller-Horror-Noir-Police-Story-Detective-Spy-Mystery-eBook-Book-Cover.jpg"
                },
                {
                    id:12,
                    title:"The king of Drugs",
                    src:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
                },
                {
                    id:13,
                    title:"Before Sun Rise",
                    src:"https://images.squarespace-cdn.com/content/v1/5202d1b3e4b099a0812c51a3/1483134090134-QOJK8Q9CL5DMFN99XWQO/ke17ZwdGBToddI8pDm48kFjiq_0Ek1NItql1dLmsgNNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGQiKALUW-YxfFfP4p0PvHcTla7NnOOvQwSGt9YLKLGBhEym7bB5Y8EAaW-uC2HxJQ/Before-Sunrise.jpg"
                },
                {
                    id:14,
                    title:"The Method",
                    src:"https://thebookcoverdesigners.com/wp-content/uploads/2017/10/LP3850_The-Method_Shannon-Kirk.jpg"
                },
                {
                    id:15,
                    title:"The Hidden Fear",
                    src:"https://www.bookcoversart.com/wp-content/uploads/2017/05/Hidden-Fear-Premade-Thriller-Horror-Noir-Police-Story-Detective-Spy-Mystery-eBook-Book-Cover.jpg"
                },
                {
                    id:16,
                    title:"The king of Drugs",
                    src:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105"
                }
            ],
            searchField:''
        };
    }
    render() {
        const { books , searchField } = this.state;
        const filteredBooks = books.filter( book => 
            book.title.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="book-container">   
                <div style={{
                    width:"100vw"
                }}>
                    <h1 style={{
                            textAlign:"center",
                            fontFamily:"initial",
                            margin:"15px 0px 25px 0px"                
                        }}>Book Corner</h1>
                </div>
               
                
                <SearchBar
                    placeholder = "enter book title"
                    handleChange = {e => this.setState({searchField : e.target.value })}
                />  
                <BookView booklist={filteredBooks}/>                  
            </div>
        )
    }
}
