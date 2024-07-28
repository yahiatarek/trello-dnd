import React, { useState } from 'react';
import Column from './components/Column';
import styled from 'styled-components';
import image from './photo.jpg';

// the initial state should've been added to the store but for the sake of simplicity, we're keeping it here

const initialData = {
  candidates: {
    'candidate-1': { id: 'candidate-1',cate: 'Applied', name: 'John Doe', location: 'New York', contact: '1234567890', rating: 5.0, status: 'New', img: image },
    'candidate-2': { id: 'candidate-2',cate: 'Shortlisted', name: 'Jane Doe', location: 'California', contact: '0987654321', rating: 4.0, status: 'New', img: image },
    'candidate-3': { id: 'candidate-3',cate: 'Interview', name: 'Alice', location: 'Texas', contact: '6789054321', rating: 3.0, status: 'Followed', img: image },
    'candidate-4': { id: 'candidate-4',cate: 'Applied', name: 'Bob', location: 'Florida', contact: '1234509876', rating: 2.0, status: 'Followed', img: image },
    'candidate-5': { id: 'candidate-5',cate: 'Shortlisted', name: 'Charlie', location: 'Washington', contact: '6789054321', rating: 1.0, status: 'New', img: image },
    'candidate-6': { id: 'candidate-6',cate: 'Interview', name: 'David', location: 'Oregon', contact: '1234509876', rating: 4.0, status: 'Followed', img: image },
  },
  categories: {
    'Applied': { id: 'cat-1', title: 'Applied', candidateIds: ['candidate-1', 'candidate-4'] },
    'Shortlisted': { id: 'cat-2', title: 'Shortlisted', candidateIds: ['candidate-2', 'candidate-5'] },
    'Interview': { id: 'cat-3', title: 'Interview', candidateIds: ['candidate-3', 'candidate-6'] },
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  background-color: #e9e9e9;
  flex-wrap: wrap;
`;

const App = () => {
  const [data, setData] = useState(initialData);
  const [activeCard, setActiveCard] = useState(null);

  // we could've used immer js to make the state update immutable but for the sake of simplicity,
  // we're doing it so

  const onDrop = (newCategory) => {
    return (e) => {
      e.preventDefault();
      const newCategories = { ...data.categories };
      const newCandidate = { ...activeCard, cate: newCategory };
      const newCandidates = { ...data.candidates, [newCandidate.id]: newCandidate };
      const oldCategory = data.categories[activeCard.cate];
      newCategories[activeCard.cate].candidateIds = oldCategory.candidateIds.filter(candidateId => candidateId !== activeCard.id);
      newCategories[newCategory].candidateIds.push(activeCard.id);
      
      const newData = { candidates: newCandidates, categories: newCategories };
      setData(newData);
      setActiveCard(null);
    };
  };

  return (
      <Container>
        {Object.keys(data.categories).map((category, index) => {
          const categoryData = data.categories[category];
          const candidates = categoryData.candidateIds.map(candidateId => data.candidates[candidateId]);
          return (
              <Column onDrop={onDrop(category)} setActiveCard={setActiveCard} key={`${category}-${index}`} categoryData={categoryData} candidates={candidates} />
          );
        })}
      </Container>
  );
};

export default App;
