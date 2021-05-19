import SocketBuilder from "../../_shared/socketBuilder.js"
import { constants } from "../../_shared/constants.js"

const socketBuilder = new SocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
    .setOnUserConnected((user) => console.log('user connected!', user))
    .setOnUserDisconnected((user) => console.log('user disconnectd!', user))
    .build()

const room = {
    id: Date.now(),
    topic: 'JS Expert éh noix'
}

const user = {
    img: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-256.png',
    username: 'tuxpedro'
}

socket.emit(constants.events.JOIN_ROOM, { user, room })