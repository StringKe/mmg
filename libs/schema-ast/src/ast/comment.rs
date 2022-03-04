use serde::{Deserialize, Serialize};

/// A comment. Currently unimplemented.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Comment {
  /// The comment text
  pub text: String,
}
