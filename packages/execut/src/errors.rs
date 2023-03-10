use axum::{
    extract::Json,
    http::StatusCode,
    response::{IntoResponse, Response},
};
use serde_json::json;

#[derive(Debug)]
pub enum Error {
    Unauthorized,
    UnknownUser,
    WrongPassword,
}

impl IntoResponse for Error {
    fn into_response(self) -> Response {
        let (status, message) = match self {
            Self::Unauthorized => (StatusCode::UNAUTHORIZED, "not authorized"),
            Self::UnknownUser => (StatusCode::NOT_FOUND, "user not found"),
            Self::WrongPassword => (StatusCode::UNPROCESSABLE_ENTITY, "wrong password"),
        };

        let body = Json(json!({
            "detail": message,
        }));

        (status, body).into_response()
    }
}

pub type Result<T> = std::result::Result<T, Error>;
