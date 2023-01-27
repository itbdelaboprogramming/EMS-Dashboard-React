const config = require('../configs/database')
const mysql = require('mysql2');
const { Model } = require('sequelize');
const pool = mysql.createPool(config)

pool.on('error', (err) => {
    console.log(err);
})


function getData_1(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }

        let lastStatus = req.query.last;
        let allData = req.query.all;
        let limit = req.query.limit
        limit = parseInt(limit)

        if (limit) {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_1 ORDER BY ID DESC LIMIT ${limit};
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }

        if (lastStatus == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_1 ORDER BY ID DESC LIMIT 1;
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }


        if (allData == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_1;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
        }
    })
};

function getData_2(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }

        let lastStatus = req.query.last;
        let allData = req.query.all;
        let limit = req.query.limit
        limit = parseInt(limit)

        if (limit) {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_2 ORDER BY ID DESC LIMIT ${limit};
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }

        if (lastStatus == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_2 ORDER BY ID DESC LIMIT 1;
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }


        if (allData == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_2;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
        }
    })
};

function getData_3(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }

        let lastStatus = req.query.last;
        let allData = req.query.all;
        let limit = req.query.limit
        limit = parseInt(limit)

        if (limit) {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_3 ORDER BY ID DESC LIMIT ${limit};
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }

        if (lastStatus == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_3 ORDER BY ID DESC LIMIT 1;
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }


        if (allData == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_3;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
        }
    })
};

function getData_4(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }

        let lastStatus = req.query.last;
        let allData = req.query.all;
        let limit = req.query.limit
        limit = parseInt(limit)

        if (limit) {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_4 ORDER BY ID DESC LIMIT ${limit};
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }

        if (lastStatus == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_4 ORDER BY ID DESC LIMIT 1;
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }


        if (allData == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_4;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
        }
    })
};

function getData_5(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }

        let lastStatus = req.query.last;
        let allData = req.query.all;
        let limit = req.query.limit
        limit = parseInt(limit)

        if (limit) {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_5 ORDER BY ID DESC LIMIT ${limit};
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }

        if (lastStatus == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_5 ORDER BY ID DESC LIMIT 1;
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }


        if (allData == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_5;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
        }
    })
};

function getData_6(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }

        let lastStatus = req.query.last;
        let allData = req.query.all;
        let limit = req.query.limit
        limit = parseInt(limit)

        if (limit) {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_6 ORDER BY ID DESC LIMIT ${limit};
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }

        if (lastStatus == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_6 ORDER BY ID DESC LIMIT 1;
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }


        if (allData == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_6;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
        }
    })
};

function getData_7(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }

        let lastStatus = req.query.last;
        let allData = req.query.all;
        let limit = req.query.limit
        limit = parseInt(limit)

        if (limit) {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_7 ORDER BY ID DESC LIMIT ${limit};
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }

        if (lastStatus == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_7 ORDER BY ID DESC LIMIT 1;
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }


        if (allData == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_7;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
        }
    })
};

function getData_8(req, res) {
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }

        let lastStatus = req.query.last;
        let allData = req.query.all;
        let limit = req.query.limit
        limit = parseInt(limit)

        if (limit) {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_8 ORDER BY ID DESC LIMIT ${limit};
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }

        if (lastStatus == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_8 ORDER BY ID DESC LIMIT 1;
                    `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
            return
        }


        if (allData == "true") {
            connection.query(
                `
                SELECT * FROM tuya_smart_plug_8;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Data berhasil diambil!',
                        data: results
                    });
                });
            connection.release();
        }
    })
};

module.exports = { getData_1, getData_2, getData_3, getData_4, getData_5, getData_6, getData_7, getData_8 }