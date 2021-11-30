import React  from 'react'

const Newsitem = (props)=> {

 
    let { title, description, imageUrl, newsUrl, author, date, source } =  props;
    return (

      <div className="container my-3">
        <div className="card">
          <div style={{
            display: 'flex',
          justifyContent: " flex-end ",
           position: "absolute",
            right: '0'
          }
          }>
            <span className=" badge rounded-pill bg-danger" >{source}  </span>
          </div>

          <img src={imageUrl ? imageUrl : "https://tse4.mm.bing.net/th?id=OIP.GKu5iP8gshXO56GtSX-1qgHaEL&pid=Api&P=0&w=310&h=176"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}  </h5>
            <p className="card-text">{description} </p>
            <p className="card-text"><small className="text-danger"> By {author ? author : "unknown"} on  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
   
}
export default Newsitem

