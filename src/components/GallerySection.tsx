// components/GallerySection.js
import React from "react";

const GallerySection = () => {
  return (
    <div className="section-fluid-main">
      <div className="section-row">
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs0Tm1JMFpESXdOeTFpTW1VekxUUXhZekF0WVRNd01TMDVZMk5sTm1FeE5UWm1ZV1FHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--f13701733eb2e0ddae10f37c9f0fbb2665889048/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-16e07b2eebf.png"
                alt=""
                className="md:h-[600px]"
              />
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>Image</h2>
        </div>
        <div className="section-col">
          <div className="section">
            <div className="section-in">
              <img
                src="https://media2.giphy.com/media/JpXje6i6NjmGHkO2Na/giphy.webp?cid=ecf05e47oh6isqda7b7bin2l2fwuf5mflcwvn84dxh40zv7c&ep=v1_gifs_search&rid=giphy.webp&ct=g"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hover-text">
          <h2>Video</h2>
        </div>
        {/* Repeat the above structure for other images and hover text */}
      </div>
    </div>
  );
};

export default GallerySection;
