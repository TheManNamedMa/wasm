extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

pub fn add(left: f64, right: f64) -> f64 {
    return left + right;
}

#[wasm_bindgen]
pub fn plus(left: f64, right: f64) -> f64 {
    return add(left, right);
}
