class AppSchema < GraphQL::Schema
  query ::Types::QueryType
  mutation ::Types::MutationType
  use GraphQL::Batch
end
