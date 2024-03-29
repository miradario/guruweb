import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [link, setLink] = useState("");

  function openModal(link) {
    setOpen(true);
    setLink(link);
  }

  //add filter to portfolio items
  const [filter, setFilter] = useState("all");
  const filterItems = (filter) => {
    setFilter(filter);
  };

  // filter portfolio items
  const filteredItems = dataportfolio.filter((item) => {
    if (filter === "all") {
      return item;
    } else if (item.type === filter) {
      return item;
    }
  });

  // add class when to button when filtered
  const activeClass = (filter) => {
    if (filter === "all") {
      return "btn btn-primary";
    } else if (filter === "Web") {
      return "btn btn-primary";
    } else if (filter === "App") {
      return "btn btn-primary";
    } else if (filter === "Web3") {
      return "btn btn-primary";
    }
    console.log(filter);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <button
              className={
                "btn btn-primary " + (filter === "all" ? " active " : "")
              }
              style={{ marginRight: "10px" }}
              onClick={() => filterItems("all")}
            >
              All
            </button>
            <button
              className={
                "btn btn-primary " + (filter === "Web" ? " active " : "")
              }
              style={{ marginRight: "10px" }}
              {...activeClass(filter)}
              onClick={() => filterItems("Web")}
            >
              Web
            </button>
            <button
              className={
                "btn btn-primary " + (filter === "App" ? " active " : "")
              }
              style={{ marginRight: "10px" }}
              onClick={() => filterItems("App")}
            >
              App
            </button>
            <button
              className={
                "btn btn-primary " + (filter === "Web3" ? " active " : "")
              }
              style={{ marginRight: "10px" }}
              onClick={() => filterItems("Web3")}
            >
              Web3
            </button>
          </Col>
        </Row>

        <ModalVideo
          className="modal-video-movie-wrap"
          url={link}
          channel="custom"
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          dismissBtnMessage
        />
        <div className="mb-5 po_items_ho">
          {filteredItems.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <h3 style={{ fontWeight: "bold" }}>{data.title}</h3>
                  <p>{data.desctiption}</p>
                  {data.weblink ? (
                    <div>
                      <a
                        style={{ border: "none" }}
                        href={data.weblink}
                        target="_blank"
                        className="none"
                      >
                        <button
                          style={{ marginTop: "10px" }}
                          className="btn ac_btn"
                        >
                          view website
                        </button>
                      </a>
                    </div>
                  ) : null}
                  {data.link ? (
                    <button
                      style={{ marginTop: "10px" }}
                      className="btn ac_btn"
                      onClick={() => openModal(data.link)}
                    >
                      watch video
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
