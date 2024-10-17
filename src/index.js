const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000 ;

app.cors();
app.use(express.json());


//health-check
app.get('/health', (req, res) => {
	res.send({message: "Health ok!"})
})


app.listen(PORT, () => {
	console.log(`server is running on ${PORT}`);
});