FROM rust:latest

WORKDIR /tokyo-opendata-backend

COPY ./src ./src 
COPY ./batch ./batch 
COPY Cargo.toml Cargo.toml
COPY output.json output.json

RUN cargo build --release

RUN cargo install --path .

CMD ["tokyo-opendata-backend"]