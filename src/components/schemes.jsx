import React from "react";
import "./components.css";

function schemes() {
  return (
    <div className="center"
      style={{
        width: "90vw",
        height: "80vh",
        display: "grid",
        gridAutoFlow: "row",
        rowGap: "1rem",
        overflowY: "auto",
      }}
    >
      <div className="text-center">
        <h1>Government Schemes</h1>
        <p>Here you can find various government schemes related to PwD.</p>
      </div>
      <div className="card scheme_c">
        <div className="card-body">
          <h5 className="card-title">DISHA</h5>
          <p className="card-text">
            This is an early intervention and school readiness scheme for
            children upto 10 years with the disabilities covered under the
            National Trust Act.
          </p>
          <a
            href="https://thenationaltrust.gov.in/content/centre-sanctioned-list.php"
            className="btn btn-primary m-2"
          >
            List of Centers
          </a>
          <a
            href="https://thenationaltrust.gov.in/content/scheme/disha.php"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="card scheme_c">
        <div className="card-body">
          <h5 className="card-title">OM</h5>
          <p className="card-text">
            This is an early intervention and school readiness scheme for
            children upto 10 years with the disabilities covered under the
            National Trust Act.
          </p>
          <a
            href="https://thenationaltrust.gov.in/content/centre-sanctioned-list.php"
            className="btn btn-primary m-2"
          >
            List of Centers
          </a>
          <a
            href="https://thenationaltrust.gov.in/content/scheme/disha.php"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="card scheme_c">
        <div className="card-body">
          <h5 className="card-title">DHARMESH</h5>
          <p className="card-text">
            This is an early intervention and school readiness scheme for
            children upto 10 years with the disabilities covered under the
            National Trust Act.
          </p>
          <a
            href="https://thenationaltrust.gov.in/content/centre-sanctioned-list.php"
            className="btn btn-primary m-2"
          >
            List of Centers
          </a>
          <a
            href="https://thenationaltrust.gov.in/content/scheme/disha.php"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="card scheme_c">
        <div className="card-body">
          <h5 className="card-title">KSHITIJ</h5>
          <p className="card-text">
            This is an early intervention and school readiness scheme for
            children upto 10 years with the disabilities covered under the
            National Trust Act.
          </p>
          <a
            href="https://thenationaltrust.gov.in/content/centre-sanctioned-list.php"
            className="btn btn-primary m-2"
          >
            List of Centers
          </a>
          <a
            href="https://thenationaltrust.gov.in/content/scheme/disha.php"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="card scheme_c">
        <div className="card-body">
          <h5 className="card-title">AMRUT</h5>
          <p className="card-text">
            This is an early intervention and school readiness scheme for
            children upto 10 years with the disabilities covered under the
            National Trust Act.
          </p>
          <a
            href="https://thenationaltrust.gov.in/content/centre-sanctioned-list.php"
            className="btn btn-primary m-2"
          >
            List of Centers
          </a>
          <a
            href="https://thenationaltrust.gov.in/content/scheme/disha.php"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default schemes;
