use sqlx::PgPool;

pub struct Context {
    pub pool: PgPool,
}
