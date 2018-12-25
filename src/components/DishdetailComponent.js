import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component {
        constructor(props) {
            super(props);
        }
        
       

        renderDish(dish) {
            if (dish != null){
                return (
                  <Card>
                      <CardImg top width="100%" object src={dish.image} alt={dish.name} />
                      <CardBody>
                      <CardTitle heading>{dish.name}</CardTitle>
                      <CardText> {dish.description}</CardText>
                      </CardBody>
                  </Card>
                );
              }
              else {
                return (
                  <div></div>
                );
              }
        }


        renderComments(comments) {
            console.log(comments);
            
            if (comments != null){
                const commentList = comments.comments.map((comment) => {
                  return(
                    <li key="comment.id">
                      {comment.comment}
                      <br/>
                      -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                      <br/><br/>
                    </li>
                  );
                });
              return (
                <div>
                  <h4>Comments</h4>
                  <ul className="list-unstyled">
                      {commentList}
                  </ul>
                </div>
              );
            }
            else {
              return (
                <div></div>
              );
            }
          }



    
        render() {
                return(
                    <div className="container">
                        <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                  </div>
                    </div>
                );
            }

           
        }
    
    
    export default DishDetail;