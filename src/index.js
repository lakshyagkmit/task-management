const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(cors());
app.use(express.json());


//health-check
app.get('/health', (req, res) => {
	res.send({message: "Health ok!"})
})


app.listen(PORT, () => {
	console.log(`server is running on ${PORT}`);
});