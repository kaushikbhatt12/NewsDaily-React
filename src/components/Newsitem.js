import React from 'react'

const Newsitem =(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" >
            <img src={imageUrl?imageUrl:"https://ychef.files.bbci.co.uk/624x351/p0fpzvnx.jpg"}/>
            <div className="card-body">
                <h5 className="card-title">{title}    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'80%' ,zIndex:'1'}}>{source.name}</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author?author:"Sources"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read here .... </a>
            </div>
            </div>
      </div>
    )
}

export default Newsitem
