import { createApp } from "./app";
import { connectToDB } from "./db/connect";
import { PORT } from './config'
import { UsersService } from "./services/users.service";

const app = createApp(UsersService)
connectToDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
