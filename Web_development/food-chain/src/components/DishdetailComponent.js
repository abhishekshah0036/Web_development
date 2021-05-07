import React from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle,Media} from 'reactstrap';

    function RenderDish ({dish}){
        return( 
            <div>
                <Card key={dish.id} >
                    <CardImg top src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    function RenderComments({comment}){
        const dishcomments=comment.map((comments) => {
            return(
                <Media key={comments.key} >
                    <Media body>
                        <p>{comments.comment}</p>
                        <p>--{comments.author},
                                    {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'})
                                    .format(new Date(Date.parse(comments.date)))}
                        </p>
                    </Media >
                </Media>
            );  
        });
        return(
            <Card>
                <CardBody>
                    <CardTitle ><h4>Comments</h4></CardTitle>
                        <CardText>
                        {dishcomments}
                        </CardText>
                </CardBody>
            </Card>
        );
    }
    
    const Dishdetail = (props) =>{
        if(props.dish != null)
            return(
                <div className='container'>
                    <div className='row '> 
                        <div className='col-12 col-md-5 m-1'>
                            <RenderDish dish ={props.dish} />
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            < RenderComments comment={props.dish.comments} />
                        </div>
                    </div>
                </div> 
            );
        else
            return(<div></div>);
    }
export default Dishdetail;