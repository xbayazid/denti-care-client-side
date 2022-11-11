import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rewardsImg from "../../../assests/rewards/rewards.png";
import { Link } from "react-router-dom";
import "./Rewards.css";

const Rewards = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col md={6}>
          <img className="img-fluid" src={rewardsImg} alt="" />
          </Col>
          <Col md={6}>
          <div className="rewards-details fonts">
          <h1>Reward Awaits When</h1>
          <h1 className="reward-title-two">You Refer A Friend</h1>
          <p className="md:w-50">
            If you’ve been happy with the care you’ve received and would like to
            share dental referrals with your friends and family, DentiCare
            invites you to take part in our dental referrals rewards program.
          </p>
          <Link>
            <button className="rewards-btn rounded">Refer Your Friend</button>
          </Link>
        </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rewards;
