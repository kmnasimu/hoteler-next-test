import React from 'react';
const data = [
    {
        img : "testi-thumb-3.jpg",
        text : "Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.",
        title : "Jessica Brown",
        desig : "Founder",
    },
    {
        img : "testi-thumb-2.jpg",
        text : "Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.",
        title : "Alesha Brown",
        desig : "Co Founder",
    }
]

const TestimonialGrid = () => {
    return (
        <>
            <section className="testimonial-section pb-90">
		        <div className="bg bg-image" style={{backgroundImage: `url(images/background/5.jpg)`}} />
                <div className="auto-container">
                    <div className="row">
                        {data.map((item, testimonialInner) => (
                        <div key={testimonialInner} className="col-lg-6 col-md-12 col-sm-12">
                            <div className="testimonial-block-four mb-md-30">
                                <div className="inner-box">
                                    <div className="content-box">
                                        <span className="icon icon-quote" />
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="text">{item.text}</div>
                                    </div>
                                    <div className="info-box">
                                        <figure className="thumb"><img src={`images/resource/${item.img}`} alt="Image" /></figure>
                                        <h5 className="name">{item.title}</h5>
                                        <span className="designation">{item.desig}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialGrid;