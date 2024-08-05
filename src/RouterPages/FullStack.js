import React from 'react'
import Articles from '../data/Articles.js';

function FullStack() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-4">
      <div className='title text-center'><h1>Full Stack Development</h1></div>
        <div className='paragraph text-center mb-3'>Start a comprehensive learning journey through our blog including the front-end and back-end technologies with insights and best practices for full-stack development.</div>
        <div className="row">
          {Articles.fsd.map((item) => {
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

export default FullStack