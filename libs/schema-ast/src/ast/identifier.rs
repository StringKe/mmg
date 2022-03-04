use super::{Span, WithSpan};
use serde::{Deserialize, Serialize};

/// An identifier.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
pub struct Identifier {
  /// The identifier contents.
  pub name: String,
  /// The span of the AST node.
  pub span: Span,
}

impl Identifier {
  /// Instantiate a new identifier with an empty span.
  pub fn new(name: &str) -> Identifier {
    Identifier {
      name: String::from(name),
      span: Span::empty(),
    }
  }
}

impl WithSpan for Identifier {
  fn span(&self) -> &Span {
    &self.span
  }
}
