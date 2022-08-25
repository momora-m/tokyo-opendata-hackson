use actix_web::{get,HttpResponse, HttpServer,App};
use serde::{Deserialize, Serialize};

use std::{fs::File, io::BufReader};

const SERVER:&str = "0.0.0.0:8080";
const JSON_NAME:&str = "output.json";
use std::collections::HashMap;
#[derive(Serialize, Deserialize)]
struct ReturnJson{
    Q5:HashMap<String,f32>,
    Q7:HashMap<String,f32>,
    Q14:HashMap<String,f32>,
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
