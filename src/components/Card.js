import React from 'react';
import styled from 'styled-components';
import star from '../star.png';

const CardContainer = styled.div`
    cursor: grab;
    max-height: 120px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 8px;
    background-color: white;
    display: flex;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    align-items: center;
    gap: 16px;
    border-radius: 4%;
`;

const ImgRatingContainer = styled.div`
    span {
        img {
            width: 15px;
            height: 15px;
            margin: unset;
        }

        background-color: #f4f5f7;
        border-radius: 4px;
        color: #333;
        font-weight: bold;
        font-size: 0.9em;
        width: 50px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 25%;
        margin-bottom: 8px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const CandidateDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex-basis: 80%;
`;

const NewStatus = styled.p`
    background-color: lightblue;
    color: blue;
    align-self: flex-start;
`;

const FollowedStatus = styled.p`
    background-color: blue;
    color: white;
    align-self: flex-end;
`;

const StatusContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;

    p {
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
    }
`;

const Card = ({ candidate, setActiveCard }) => {
  return (
    <CardContainer 
        draggable 
        onDragStart={() => setActiveCard(candidate)} 
        onDragEnd={() => setActiveCard(null)}
    >
      <ImgRatingContainer>
          <img src={candidate.img} alt="candidate" />
          <span>{candidate.rating}
              <img src={star} alt="star" />
          </span>
      </ImgRatingContainer>
      <CandidateDetailsContainer>
          <h4>{candidate.name}</h4>
          <p>{candidate.location}</p>
          <p>{candidate.contact}</p>
      </CandidateDetailsContainer>
      <StatusContainer>
          {candidate.status === 'New' && <NewStatus>{candidate.status}</NewStatus>}
          {candidate.status === 'Followed' && <FollowedStatus>{candidate.status}</FollowedStatus>}
      </StatusContainer>
    </CardContainer>
  );
};

export default Card;
