
import { createApp } from './app'
import { connectToDB } from './db/connect'
import { PORT } from './config'
import { UsersService } from './services/users.service'

const userService = new UsersService()
const app = createApp(userService)

/* eslint-disable @typescript-eslint/no-floating-promises */
connectToDB()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
