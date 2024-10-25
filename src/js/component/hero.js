import React from "react";

const Hero = (props) => {

    return(<div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-light">
        <div class="col-lg-6 px-0">
          <h1 class="display-4 fst-italic">{props.title}</h1>
          <p class="lead my-3">{props.description}</p>
          <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
        </div>
      </div>)
}

export default Hero;