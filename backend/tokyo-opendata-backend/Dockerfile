FROM rust:latest

WORKDIR /tokyo-opendata-backend

COPY ./src ./src 
COPY Cargo.toml Cargo.toml
COPY test.json test.json

RUN cargo build --release

RUN cargo install --path .

CMD ["tokyo-opendata-backend"]