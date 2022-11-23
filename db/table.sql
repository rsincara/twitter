CREATE TABLE IF NOT EXISTS twits
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    author_id integer NOT NULL,
    post text COLLATE pg_catalog."default" NOT NULL,
    created_date date NOT NULL,
    CONSTRAINT twits_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    login text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_login_key UNIQUE (login)
);

CREATE TABLE IF NOT EXISTS users_subs
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    user_sub_id integer NOT NULL,
    user_author_id integer NOT NULL,
    CONSTRAINT users_subs_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users_tokens
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    user_id integer NOT NULL,
    token text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_tokens_pkey PRIMARY KEY (id)
);
