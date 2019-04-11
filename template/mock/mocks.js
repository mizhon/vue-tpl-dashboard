import user from './modules/user'
import role from './modules/role'
import search from './modules/search'
import article from './modules/article'

export default [
  ...user,
  ...role,
  ...search,
  ...article
]
