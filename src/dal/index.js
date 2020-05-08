const { QueryTypes } = require('sequelize');
const DAL = require('./dal');

DAL.query("SELECT * FROM `jd`.`user`", { type: QueryTypes.SELECT }).then((res) => {
	console.log(res);
});