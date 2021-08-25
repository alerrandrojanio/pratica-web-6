CREATE DATABASE pratica_6;

CREATE TABLE IF NOT EXISTS posts(
    id BIGSERIAL PRIMARY KEY,
    texto text NOT NULL,
    data text NOT NULL,
    hora text NOT NULL,
    imagem text NOT NULL
);

CREATE TABLE IF NOT EXISTS feedback(
    id BIGSERIAL PRIMARY KEY,
    id_post BIGSERIAL NOT NULL,
    comentario text NOT NULL,
    data text NOT NULL,
    hora text NOT NULL,
    FOREIGN KEY (id_post) REFERENCES posts (id)
);

CREATE TABLE IF NOT EXISTS users(
    id BIGSERIAL PRIMARY KEY,
    login text NOT NULL,
    password text NOT NULL
);

INSERT INTO users (login, password) VALUES ('ale', '1234');