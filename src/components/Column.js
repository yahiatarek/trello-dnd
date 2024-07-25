import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import DropArea from './DropArea/DropArea';

const getBorderColor = (title) => {
  if (title === 'Applied') {
    return 'blue';
  }

  if (title === 'Shortlisted') {
    return 'green';
  }

  return 'red';
};

const ColumnContainer = styled.div`
  padding: 8px;
  margin: 8px;
  overflow: hidden;
  border: 1px solid lightgrey;
  border-radius: 5%;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  min-height: 60vh;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 601px) and (max-width: 900px) {
    width: 500px;
  }

  @media (min-width: 901px) {
    width: 400px;
  }
`;

const ColumnHeader = styled.div`
  min-height: 100px;
  border-radius: 1%;
  border-bottom: 4px solid ${props => getBorderColor(props.title)};
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CandidateList = styled.div`
  overflow-y: auto;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;

const ApplicantsCountOverview = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ColumnDesc = styled.div`
  display: flex;
  align-items: baseline;

  p {
    padding: 16px;
    font-size: 15px;
    font-weight: bold;
  }
`;

const Column = ({ categoryData, candidates, setActiveCard, onDrop }) => {
  return (
    <ColumnContainer>
      <ColumnHeader title={categoryData?.title}>
        <ColumnDesc>
          <input type="checkbox" />
          <p>{categoryData.title}</p>
        </ColumnDesc>
        <ApplicantsCountOverview>
          <div>
            <p>8</p>
            <div>Rejected</div>
          </div>
          <div>
            <p>9</p>
            <div>Total</div>
          </div>
        </ApplicantsCountOverview>
      </ColumnHeader>
      <CandidateList>
        {candidates.length === 0 ? (
            <DropArea onDrop={onDrop} index={0} />
        ) : (
            candidates.map((candidate, index) => (
            <div key={`${candidate.name}-${index}`}>
                <DropArea onDrop={onDrop} index={index} />
                <Card setActiveCard={setActiveCard} candidate={candidate} index={index} />
                {index === candidates.length - 1 && <DropArea onDrop={onDrop} index={index + 1} />}
            </div>
            ))
        )}
    </CandidateList>

    </ColumnContainer>
  );
};

export default Column;
