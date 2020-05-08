const { Sequelize, QueryTypes } = require('sequelize');

class DAL {
	connect() {
		// TODO  不同的环境要连接不同的数据库
		this.sequelize = new Sequelize('jd', 'root', 'Jiangdong0925!', {
			host: '106.54.197.246',
			dialect: 'mysql'
		});
		return this.sequelize
			.authenticate() // 是否连接正常
			.then(async () => {
				console.log('连接成功');
			}).catch(err => {
				// TODO 走全局Error类
				console.error('连接失败:', err);
				return Promise.reject();
			});
	}
	async query(sql, opts) {
		if (!this.sequelize) {
			await this.connect();
		}
		return this.sequelize.query(sql, opts).then((res) => {
			this.sequelize.close(); // 查询完后断开连接，他本身过几秒就会断开
			return res;
		});
	}
}


module.exports = new DAL();


