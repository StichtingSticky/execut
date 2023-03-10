use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::{query_as, PgPool};
use uuid::Uuid;

use crate::{Error, Result};

#[derive(Debug, Default, Deserialize, Serialize)]
pub struct User {
    pub id: Uuid,
    pub handle: String,
    pub password_hash: Option<String>,
    pub is_registered: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Default, Deserialize, Serialize)]
pub struct CreateUser {
    pub handle: String,
    pub password_hash: Option<String>,
    pub is_registered: Option<bool>,
    pub created_at: Option<DateTime<Utc>>,
}

#[derive(Debug, Default, Deserialize, Serialize)]
pub struct UpdateUser {
    pub handle: Option<String>,
    pub password_hash: Option<String>,
    pub is_registered: Option<bool>,
}

impl User {
    pub async fn fetch(pool: &PgPool, handle: &String) -> Result<User> {
        let user = query_as!(
            User,
            "select *
               from users
              where handle = $1",
            handle
        )
        .fetch_one(pool)
        .await
        .or_else(|_| Err(Error::UnknownUser))?;

        Ok(user)
    }
}
