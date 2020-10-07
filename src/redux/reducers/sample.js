const UPDATE_USER = 'UPDATE_USER'
const DELETE_USER = 'DELETE_USER'
const ADD_NEW_USER = 'ADD_NEW_USER'

const initialState = {
  users: [{
    id: 1,
    name: 'Иванова Анна Михайловна',
    phone: '07716541234',
    email: 'ivanova@mail.ru'
  },
  {
    id: 2,
    name: 'Улан Турсунбек',
    phone: '0771656786786',
    email: 'Ulan@mail.ru'
  }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...state, users: [...state.users.map((it) => (it.id === action.id)
          ? { ...it, name: action.name, phone: action.phone, email: action.email }
          : it
        )]
      }
    }
    case DELETE_USER: {
      return {
        ...state, users: [...state.users.filter((it) => it.id !== action.id)]
      }
    }
    case ADD_NEW_USER: {
      return {
        ...state, users: [...state.users, { id: action.id, name: action.name, phone: action.phone, email: action.email }]
      }
    }
    default:
      return state
  }
}

export function updateUser(id, name, phone, email) {
  return { type: UPDATE_USER, id, name, phone, email }
}

export function deleteUser(id) {
  return { type: DELETE_USER, id }
}

export function addNewUser(id, name, phone, email) {
  return { type: ADD_NEW_USER, id, name, phone, email }
}