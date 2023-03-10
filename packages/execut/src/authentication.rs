use std::str::FromStr;

use async_trait::async_trait;
use axum::{
    extract::FromRequestParts, extract::State, http::request::Parts, response::IntoResponse, Json,
};
use uuid::Uuid;

use crate::{extractors::Context, Error, Result};

const BEARER: &str = "Bearer ";

/// Handler for `POST /authorize`
pub async fn authorize(
    Json(user): Json<UserAuth>,
    State(ctx): State<Context>,
) -> impl IntoResponse {
    unimplemented!();

    // let UserAuth { handle, password } = user;
    // let Context { pool } = ctx;

    // // Fetch user from database
    // let user = User::fetch(&pool, &handle)
    //     .await
    //     .ok_or(Error::UnknownUser)?;

    // // Check if the password is correct, if it is not we return an error
    // if !user.verify_password(password) {
    //     return Error::WrongPassword?;
    // }

    // Ok(user.generate_token())
}

/// Handler for `POST /register`
pub async fn register() -> impl IntoResponse {}

pub struct UserAuth {
    handle: String,
    password: String,
}
struct UserClaim(Uuid);

#[async_trait]
impl<S> FromRequestParts<S> for UserClaim
where
    S: Send + Sync,
{
    type Rejection = Error;

    async fn from_request_parts(parts: &mut Parts, _: &S) -> Result<Self> {
        let auth_header = parts
            .headers
            .get("Authorization")
            .and_then(|header| header.to_str().ok())
            .ok_or(Error::Unauthorized)?;

        if !auth_header.starts_with(BEARER) {
            return Err(Error::Unauthorized);
        }

        let claim = auth_header.trim_start_matches(BEARER);

        Ok(UserClaim(
            Uuid::from_str(claim).or_else(|_| Err(Error::Unauthorized))?,
        ))
    }
}
