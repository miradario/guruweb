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
        <ModalVideo
          className="modal-video-movie-wrap"
          url={link}
          channel="custom"
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          dismissBtnMessage
        />
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  {/*   <a href={data.link}>view project</a> */}

                  <button
                    className="btn ac_btn"
                    onClick={() => openModal(data.link)}
                  >
                    view project
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
