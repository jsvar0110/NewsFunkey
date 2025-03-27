import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{padding:'0'}}>
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          
        <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
        
          <img src={!imageUrl ? "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa04c0729-4c98-4474-bf97-a920159b670c.jpg?source=next-barrier-page" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewItem
