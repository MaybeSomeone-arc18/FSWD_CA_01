import React from "react";
const TestimonialCard =()=>{
    const TestimonialCard={
        customerName: "Emily Watson",
        reviewText: "This service was amazing! Highly recommended.",
}
    return(
        <div>
            {TestimonialCard.customerName}
            <div>{TestimonialCard.reviewText}</div>
        </div>
    )
}
export default TestimonialCard