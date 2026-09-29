const ClientErrorsCodes = Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORISED:401,
    NOT_FOUND:404
});

const ServerErrorsCodes = Object.freeze({ //Object.freeze doesn't allow object to be updated anywhere else
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501,
});

const SuccessCodes = Object.freeze({
    OK:200,
    CREATED:201,
});

module.exports={
    ClientErrorsCodes,
    ServerErrorsCodes,
    SuccessCodes,
}