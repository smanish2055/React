import React from 'react'
import kathmandu from './Assets/kathmandu.webp'
import geneva from './Assets/geneva.webp'
import austin from './Assets/austin.webp'
import seattle from './Assets/seattle.webp'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
            <h2 className="font-weight-bold foot">
            We're <span className='text-success'>happy to chat in person</span> "if you're close to one of our office locations."
            </h2>
        </div>

    
      </div>

      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={seattle} className="card-img-top" alt="Seattle" />
            <div className="card-body">
              <h5 className="card-title">Seattle</h5>
              <p className="card-text">1335 N Northlake Way <br />
              Seattle WA <br />
              98103
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={kathmandu} className="card-img-top" alt="Seattle" />
            <div className="card-body">
              <h5 className="card-title">Kathmandu</h5>
              <p className="card-text">Charkhal Rd, Dillibazar <br />
              Kathmandu, Nepal <br />
              44660
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src= {geneva} className="card-img-top" alt="Seattle" />
            <div className="card-body">
              <h5 className="card-title">Austin</h5>
              <p>12600 Hill Country Blvd <br />
              Austin TX <br />
              78738
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src= {austin} className="card-img-top" alt="Seattle" />
            <div className="card-body">
              <h5 className="card-title">Geneva</h5>
              Impact Hub Geneva <br />
              Rue Fendt 1, 1201 Geneva <br />
              Switzerland <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
