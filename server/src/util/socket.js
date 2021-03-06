import http from 'http'
import { Server } from 'socket.io'

export default class SocketServer {
    #io

    constructor({ port }) {
        this.port = port
    }

    async start() {
        const server = http.createServer((resolve, response) => {
            response.writeHead(200, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            })

            response.end('Hey there!!')
        })

        this.#io = new Server(server, {
            cors: {
                origin: "*",
                credentials: false
            }
        })

        // teste para validar o front-end
        // const room = this.#io.of('/room')
        // room.on('connection', socket => {
        //     socket.emit('userConnection', 'socket id se conectou ' + socket.id)

        //     socket.on('joinRoom', (dados) => {
        //         console.log('data recived', dados)
        //     })
        // })

        return new Promise((resolve, reject) => {
            server.on('error', reject)

            server.listen(this.port, () => resolve(server))
        })
    }
}