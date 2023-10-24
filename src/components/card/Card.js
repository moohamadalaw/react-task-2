import React from 'react'
import flower from '../../img/flo.jpg'
export default function Card(props) {
    return (
        <div className='col-4'>
            <div className="card mt-3" style={{ width: "18rem" }}>
                <img src={flower} className="card-img-top" alt="no" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.desc}
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>


    )
}

