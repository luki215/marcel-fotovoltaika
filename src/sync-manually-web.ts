import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { sync } from './sync';

const app = express();
const port = 3001;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up the view engine
app.set('view engine', 'ejs');

// Define the HTML template as a string
const formTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Submit Form</title>
</head>
<body>
  <h1>Fetch data (max 1 day)</h1>
  <form action="/" method="POST">
    <label for="datetime-from">From:</label>
    <input type="datetime-local" id="datetime-from" name="datetime-from" required><br><br>
    <label for="datetime-to">To:</label>
    <input type="datetime-local" id="datetime-to" name="datetime-to" required><br><br>
    <button type="submit" id="submit-button">Submit</button>
  </form>

  <script>
    document.getElementById('submit-button').addEventListener('click', function() {
      // Display loader while processing
      this.innerHTML = 'Loading...';
    });
  </script>
</body>
</html>
`;

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.send(formTemplate);
});

app.post('/', async (req: Request, res: Response) => {
  const { 'datetime-from': datetimeFrom, 'datetime-to': datetimeTo } = req.body;

  // Parse the datetime values into Date objects
  const from = new Date(datetimeFrom);
  const to = new Date(datetimeTo);

  await sync(from, to);

  // Render the success message
  res.send('<h1>Success</h1><p>The form has been submitted successfully!</p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
