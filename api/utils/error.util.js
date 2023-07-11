const { Response } = require("./response.util");
const {
    BAD_REQUEST_STATUS,
    UNAUTHORIZED_STATUS,
    UNPROCESSABLE_ENTITY_STATUS,
    INTERNAL_SERVER_ERROR_STATUS,
} = require("../constants/http-status.constant");
const {
    BAD_REQUEST_CODE,
    UNAUTHORIZED_CODE,
    UNPROCESSABLE_ENTITY_CODE,
    INTERNAL_SERVER_ERROR_CODE,
} = require("../constants/http-status-code.constant");
const {
    VALIDATION_ERROR,
    INVALID_API_KEY,
    EMAIL_ALREADY_EXISTS,
    SOMETHING_WENT_WRONG,
    INVALID_RECOVERY_CODE,
    SEQUELIZE_VALIDATION_ERROR,
    INVALID_USERNAME_OR_PASSWORD,
    INVALID_ROOM_NO,
} = require("../constants/error-message.constant");

const customError = (name = "", message = "") => {
    let err = new Error(message);
    err.name = name;
    return err;
};

const handlerError = (res, err) => {
    switch (err.name) {
        case VALIDATION_ERROR:
            return Response(res, BAD_REQUEST_STATUS, BAD_REQUEST_CODE, null, err.message);
        case INVALID_API_KEY:
            return Response(res, UNAUTHORIZED_STATUS, UNAUTHORIZED_CODE, null, INVALID_API_KEY);
        case EMAIL_ALREADY_EXISTS:
            return Response(res, UNPROCESSABLE_ENTITY_STATUS, UNPROCESSABLE_ENTITY_CODE, null, EMAIL_ALREADY_EXISTS);
        case INVALID_USERNAME_OR_PASSWORD:
            return Response(res, UNAUTHORIZED_STATUS, UNAUTHORIZED_CODE, null, INVALID_USERNAME_OR_PASSWORD);
        case SEQUELIZE_VALIDATION_ERROR:
            return Response(res, INTERNAL_SERVER_ERROR_STATUS, INTERNAL_SERVER_ERROR_CODE, null, err.message);
        case INVALID_RECOVERY_CODE:
            return Response(res, UNPROCESSABLE_ENTITY_STATUS, UNPROCESSABLE_ENTITY_CODE, null, INVALID_RECOVERY_CODE);
        case INVALID_ROOM_NO:
            return Response(res, UNAUTHORIZED_STATUS, UNAUTHORIZED_CODE, null, INVALID_ROOM_NO);
        default:
            return Response(res, INTERNAL_SERVER_ERROR_STATUS, INTERNAL_SERVER_ERROR_CODE, null, SOMETHING_WENT_WRONG);
    }
};

module.exports.CustomError = customError;
module.exports.HandlerError = handlerError;
