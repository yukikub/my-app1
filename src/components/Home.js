import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <>
            <div className='row'>
                <div className='col-lg-6 col-md-10 col-sm-12  align-items-md-center'>
                    <h1 className='me-auto'>Shop Pet</h1>
                    <p className='ls-12 mt-12'>shop for sale of pets</p>
                </div>
                    {/* <div className="card ">
                        <div className="card-header">animal species</div>
                            <div className="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <div className="list-group">
                                    <a href="#" class="list-group-item list-group-item-action active">Golden Retriever</a>
                                    <a href="#" class="list-group-item list-group-item-action">collie</a>
                                    <a href="#" class="list-group-item list-group-item-action">jack russell</a>
                                    <a href="#" class="list-group-item list-group-item-action">chihuahua</a>
                                    <a href="#" class="list-group-item list-group-item-action disabled">shih tsu</a>                        
                                    <br/>
                                    <a className="thing" onMouseEnter={() => this.setState({ showSomething: true })}>
                                    <button className="btn btn-primary">Read More</button>
                                    </a>
                                </div> 
                            </div>
                        </div>*/}
                    </div>
                    <div style={{ margin: '100px' ,}}>
                    <img className='images' src="\images\pet-house.png" width="10" height="200" style={{ width: '250px'}}/>
                    </div>
            
        </>
    )
  }
}
