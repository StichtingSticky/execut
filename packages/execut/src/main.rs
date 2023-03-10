use axum::{
    Router, Server,
};
use clap::Parser;
use sqlx::{postgres::PgPoolOptions, PgPool};

use execut::config::Config;

#[derive(Clone)]
pub struct State {
    pub hmac_secret: String,
    pub pool: PgPool,
}

#[tokio::main]
async fn main() {
    dotenvy::dotenv().expect("Unable to read environment variables from `.env`");

    let config = Config::parse();

    let Config { database_url, hmac_secret } = config;

    let pool = PgPoolOptions::new()
        .connect(&database_url)
        .await
        .expect("Unable to connect to postgres database, ensure it is running");

    // let state = State { hmac_secret, pool };

    // let app = Router::new()
    //     .with_state(state);

    // let addr = "127.0.0.1:3000".parse().unwrap();

    // Server::bind(&addr)
    //     .serve(app.into_make_service())
    //     .await
    //     .unwrap();
}
