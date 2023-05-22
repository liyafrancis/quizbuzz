import React, { useState } from 'react';
import { Tabs, Tab, Typography, Backdrop, Autocomplete, TextField, Button,Table, TableHead, TableRow, TableCell } from '@mui/material';
import { Box } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Modequestion = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 0) {
      setShowBackdrop(true);
    } else {
      setShowBackdrop(false);
    }
  };

  const [selectedTags, setSelectedTags] = useState([]);
  const handleTagChange = (event, value) => {
    setSelectedTags(value);
  };

  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleNumQuestionsChange = (event) => {
    const count = parseInt(event.target.value);
    setNumQuestions(count);
    setQuestions(Array(count).fill({ question: '', options: ['', '', '', ''] }));
  };

  const handleQuestionChange = (event, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(updatedQuestions);
  };
  const handleSubmit = () => {
    
    console.log('Form submitted');
  
   
    setNumQuestions(0);
    setQuestions([]);
    setShowBackdrop(false);
    setActiveTab(0);
  };

  return (
    <div>
   
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="primary"
        //variant="fullWidth"
        sx={{ width: '1000px' }}
      >
        <Tab label="Assign questions" />
        <Tab label="Attendee details" />
        
      </Tabs>

          

      <TabPanel value={activeTab} index={0}>
        <h1>Generate questions here!</h1>
        <Backdrop open={showBackdrop}>
          <Box p={3} width={300} height={500} bgcolor="white" sx={{ overflowY: 'auto' }}>
            <Typography style={{ fontFamily: 'cursive', fontSize: '25px', color: 'tan' }}>
              Type in quizes!
            </Typography>
            <Autocomplete
              multiple
              options={[
                'Science',
                'Sports',
                'General Knowledge',
                'History',
                'Geography',
                'Maths',
                'Dates',
                'Arts and Culture',
                'Modern Technology',
                'Movies,Books & TV Shows ',
                'Funny',
              ]}
              value={selectedTags}
              onChange={handleTagChange}
              renderInput={(params) => <TextField {...params} label="Select a tag" sx={{ width: '100%' }} />}
            />
            <br />
            <TextField
              label="Number of Questions"
              type="number"
              value={numQuestions}
              onChange={handleNumQuestionsChange}
              sx={{ width: '100%' }}
              
            />

            {questions.map((questionObj, questionIndex) => (
              <div key={questionIndex} style={{ marginTop: '20px' }}>
                <TextField
                  label={`Question ${questionIndex + 1}`}
                  value={questionObj.question}
                  onChange={(event) => handleQuestionChange(event, questionIndex)}
                  sx={{ width: '100%' }}
                />

                {questionObj.options.map((option, optionIndex) => (
                  <div key={optionIndex } style={{ marginTop: '5px' }}>
                    <TextField
                      label={`Option ${optionIndex + 1}`}
                      value={option}
                      onChange={(event) =>
                        handleOptionChange(event, questionIndex, optionIndex)
                      }
                      sx={{ width: '100%' }}
                    />
                  </div>
                ))}
              </div>
              
            ))}
             <Button variant="contained"  color='success' sx={{ marginTop: '20px' }} style={{width:"100%"}}  onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Backdrop>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <h2>Attendee details</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>  Name of participant </TableCell>
              <TableCell>  Email id </TableCell>
              <TableCell>  Quiz tag </TableCell>
              <TableCell>  Score </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TabPanel>
     


          
          
     
      <br />

      
    </div>
  );
};

function TabPanel({ children, value, index }) {
  return (
    <Typography component="div" role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default Modequestion;
