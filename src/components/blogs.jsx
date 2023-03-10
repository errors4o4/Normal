import React from "react";
import "./blogs.css";
import "./blog_post";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function blogs() {
  return (
    <div>
      <table>
        <h1 className="center_h">Blogs to read/ listen!</h1>
        <tr>
          <tr>
            <div className="cards m-2">
              <h3 className="cards__title">
                <a href="/blogpost">Blog 1</a>
              </h3>
              <p className="cards__content">
                Click on the above link to view the blog 1.{" "}
              </p>
              {/* <div className="cards__date">April 15, 2022</div> */}
            </div>
          </tr>

          <tr>
            <div className="cards m-2">
              <h3 className="cards__title">
                <a href="/blogpost">
                  Blog 2
                </a>
              </h3>
              <p className="cards__content">
                Click on the above link to view the blog 2.{" "}
              </p>
              {/* <div className="cards__date">April 15, 2022</div> */}
            </div>
          </tr>

          <tr>
            <div className="cards m-2">
              <h3 className="cards__title">
                <a href="/blogpost">
                  Blog 3
                </a>
              </h3>
              <p className="cards__content">
                Click on the above link to view the blog 3.{" "}
              </p>
              {/* <div className="cards__date">April 15, 2022</div> */}
            </div>
          </tr>

          <tr>
            <div className="cards m-2">
              <h3 className="cards__title">
                <a href="/blogpost">
                  Blog 4
                </a>
              </h3>
              <p className="cards__content">
                Click on the above link to view the blog 4.{" "}
              </p>
              {/* <div className="cards__date">April 15, 2022</div> */}
            </div>
          </tr>
        </tr>
      </table>
    </div>
  );
}

export default blogs;
