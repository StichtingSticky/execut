use clap::Parser;

#[derive(Parser)]
pub struct Config {
    #[clap(long, env)]
    pub database_url: String,
    
    #[clap(long, env)]
    pub hmac_secret: String,
}
