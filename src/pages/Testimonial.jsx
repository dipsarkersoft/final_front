import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

const reviews = [
  { id: 1, reviewer: "John Doe", body: "Great product, I love it!", created_at: "2025-01-20",
     image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D" },

  { id: 2, reviewer: "Jane Smith", body: "Amazing quality, highly recommend!", created_at: "2025-01-22",
     image: "https://images.unsplash.com/photo-1608681299041-cc19878f79f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, reviewer: "Samuel Lee", body: "Will definitely buy again.", created_at: "2025-01-23", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, reviewer: "Mike Johnson", body: "Fast delivery, excellent product!", created_at: "2025-01-24", 
    image: "https://images.unsplash.com/photo-1583692331507-fc0bd348695d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, reviewer: "Emily Davis", body: "Very satisfied with my purchase.", created_at: "2025-01-25",
     image: "https://plus.unsplash.com/premium_photo-1723770023600-8083358720aa?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, reviewer: "Chris Lee", body: "Good value for the price.", created_at: "2025-01-26", 
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

export const Testimonial = () => {
  return (
    <div>

<div className="container mt-5">
      <h2 className="text-center mb-4">Customer Reviews</h2>
      <Swiper
        spaceBetween={10} // space between slides
        slidesPerView={3} // 3 items per slide
        loop={true} // loop the carousel
        navigation={true} // enable navigation buttons
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 3, 
          },
        }}
      >
         {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="card text-center caroselca">
              <img  src={review.image} className="card-img-top" alt={review.reviewer} />
              <div className="card-body">
                <h5 className="card-title">{review.reviewer}</h5>
                <p className="card-text">{review.body}</p>
                <p className="card-text">
                  <small className="text-muted">{new Date(review.created_at).toLocaleDateString()}</small>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>



    </div>
  )
}
