export type Task = {
  id: Number
  done: Boolean
  text: String
  label?: {
    id: Number
    text: String
    color: String
  }
}