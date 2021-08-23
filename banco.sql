CREATE DATABASE pratica_6;

CREATE TABLE IF NOT EXISTS posts(
    id BIGSERIAL PRIMARY KEY,
    texto text NOT NULL,
    data text NOT NULL,
    hora text NOT NULL,
    imagem text NOT NULL
);
