create table users
  ( id                uuid
                      primary key
                      default gen_random_uuid()
  , handle            text
                      unique
                      not null
  , password_hash     text
  , is_registered     boolean
                      not null
                      default 'false'
  , created_at        timestamp with time zone
                      not null
                      default now()
  , updated_at        timestamp with time zone
                      not null
                      default now()
  );
