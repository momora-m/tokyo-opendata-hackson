use actix_web::{get,HttpResponse, HttpServer,App};
use serde::{Deserialize, Serialize};

use std::{fs::File, io::BufReader};

const SERVER:&str = "0.0.0.0:8080";
const JSON_NAME:&str = "test.json";

#[derive(Serialize, Deserialize)]
struct ReturnJson{
    q1:i32,
    q2:i32,
    q3:i32,
    q4:i32,
    q5:i32,
}

#[get("/getJson")]
async fn get_json() -> Result<HttpResponse,actix_web::Error>{
    let json = File::open(JSON_NAME).unwrap();
    let json = BufReader::new(json);

    let res:ReturnJson = serde_json::from_reader(json).unwrap();

        Ok(
    HttpResponse::Ok()
        .content_type("application/json")
        .json(res))
}

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .service(get_json)
    })
    .bind(SERVER)?
    .run()
    .await
}
