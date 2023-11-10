export type Task = {
  id: Number
  done: Boolean
  text: String
  label?: Label
}

export type Label = {
  text: String
  color: String
}

export type Modal = {
  value: boolean,
  type: string,
  data?: any
}
