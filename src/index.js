const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const process = require('process');

const app = express();
const PORT = process.env.PORT || 3000 ;

sequelize.authenticate();
app.use(cors());
app.use(express.json());


//health-check
app.get('/health', (req, res) => {
	res.send({message: "Health ok!"})
})


app.listen(PORT, () => {
	console.log(`server is running on ${PORT}`);
});