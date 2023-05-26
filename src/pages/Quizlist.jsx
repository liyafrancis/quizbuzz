import React from 'react';
import { useParams } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const QuizList = () => {
  const { topic } = useParams();

  const quizzes = [
    { name: 'Quiz 1', score: 80 },
    { name: 'Quiz 2', score: 90 },
    { name: 'Quiz 3', score: 75 },
  ];

  return (
    <div>
      <h1>{topic} Quizzes</h1>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Quiz Name</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quizzes.map((quiz, index) => (
              <TableRow key={index}>
                <TableCell>{quiz.name}</TableCell>
                <TableCell>{quiz.score}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => console.log(`Attend ${quiz.name}`)}>
                    Attend
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default QuizList;
