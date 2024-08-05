import React from 'react'
import Articles from '../data/Articles.js';

function Career() {
  return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-4 ">
      <div className='title text-center'><h1>CAREER</h1></div>
      <div className="row">
        {Articles.career.map((item) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
              <div className="card h-100 border border-success">
                <img className="card-img-top" src={item.image} alt={item.title} />
                <div className="card-body">
                    <h4 className="text-start fw-bolder">{item.title}</h4>
                      <div><h5 className='price text-success pt-2'>{item.cost}</h5></div>
                      <div className='handleby text-start pt-2'>{item.handleBy}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  )
}

export default Career