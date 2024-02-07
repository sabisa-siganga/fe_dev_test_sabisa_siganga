"use client";

import Favourites from "@/app/components/Favourites/Favourites";
import Link from "next/link";
import React from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

const fetchPostDetails = () => {
  return (
    <div className="detailsContainer">
      <Row>
        <Col sm={8}>
          <div>
            <div className="homeBtn">
              <Link href="/">Back home</Link>
            </div>
            <div className="detailsContainer">
              <p>Author: Emily Jones</p>
              <p>
                Brook was found killed and her killers have left the country,
                Police are still in search of the killers
              </p>
              <div>
                <p>Comments</p>
                <p>post comments</p>

                <div>
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col sm={4}>
          <div className="favourites">
            <Favourites />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default fetchPostDetails;
