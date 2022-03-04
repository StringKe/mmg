#![deny(clippy::all)]

use napi_derive::napi;

#[cfg(all(
  any(windows, unix),
  target_arch = "x86_64",
  not(target_env = "musl"),
  not(debug_assertions)
))]
#[global_allocator]
static ALLOC: mimalloc::MiMalloc = mimalloc::MiMalloc;

#[napi]
pub fn parser(input: String) -> String {
  let mut diagnostics = diagnostics::Diagnostics::new();
  let ast = schema_ast::parser::parse_schema(&*input, &mut diagnostics);
  serde_json::to_string(&ast).unwrap()
}
