import React from 'react';
import Slider from 'react-slick';

const companies = [
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png'
  },
  {
    name: 'TCS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/320px-Tata_Consultancy_Services_Logo.svg.png'
  },
  {
    name: 'Infosys',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/320px-Infosys_logo.svg.png'
  }
];

const CompanySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Students Work At
        </h2>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-24">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanySlider;