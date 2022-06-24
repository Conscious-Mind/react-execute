import React from "react";

import "../css/Demo.css";

const Demo = () => {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="col-1">
          <p>More Than 100 Financial Planners,</p>
          <p>One Philosophy</p>
          <p>
            Every single one of our financial advisors receives rigorous
            training according to John Doe's philosophy based on academic
            research (including that of a Nobel laureate in Economics) and
            Behavioral Finance.
          </p>
          <button className="button">Get your free financial analysis</button>
        </div>
        <div className="col-2">
          <iframe
            width="600"
            height="320"
            src="https://www.youtube.com/embed/zWAsNhrt_i4"
            title="How Hiver makes collaboration on shared inboxes easier"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Demo;
