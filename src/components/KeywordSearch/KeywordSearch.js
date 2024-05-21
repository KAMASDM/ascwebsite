import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
} from "@mui/material";

const KeywordSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    if (!keyword.trim()) return;

    const baseKeywords = [
      "tips",
      "strategies",
      "techniques",
      "tools",
      "methods",
      "statistics",
      "examples",
      "benefits",
      "guides",
      "mistakes",
    ];
    const relatedKeywords = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < baseKeywords.length; j++) {
        relatedKeywords.push(`${keyword} ${baseKeywords[j]} ${i + 1}`);
      }
    }
    setResults(relatedKeywords);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
              Keyword Research Tool
            </Typography>
            <TextField
              label="Enter a keyword"
              variant="outlined"
              fullWidth
              value={keyword}
              onChange={handleKeywordChange}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              disabled={!keyword.trim()}
              fullWidth
            >
              Search
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ height: 400, overflow: "auto", p: 2 }}>
            {results.length > 0 && (
              <React.Fragment>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Results for "{keyword}":
                </Typography>
                <List dense>
                  {results.map((result, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={result} />
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KeywordSearch;