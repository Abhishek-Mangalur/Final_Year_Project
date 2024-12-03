// const express = require('express');
// const app = express();
// const port = 5000;

// app.get('/', (req, res) => {
//   res.send('Test Project Running!');
// });

// app.listen(port, () => {
//   console.log(`Test server running on http://localhost:${port}`);
// });

app.post('/upload', upload.single('file'), (req, res) => {
  const { examTitle } = req.body;
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  console.log(`Received Exam Title: ${examTitle}`);
  console.log(`File stored at: ${req.file.path}`);

  res.status(200).send('File uploaded successfully.');
});
