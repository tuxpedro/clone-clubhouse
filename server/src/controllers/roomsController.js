export default class RoomsController {
    constructor() {

    }

    onNewConnetion(socket) {
        const { id } = socket
        console.log('connection stablished with' + id)
    }

    getEvents() {
        const functions = Reflect.ownKeys(RoomsController.prototype)
            .filter(fn => fn !== 'constructor')
            .map(name => [name, this[name].bind(this)])

        return new Map(functions)
    }

    //return function getEvents
    /**
     * [
     *  ['onNewConnection', this.onNewConnection],
     *  ['disconnect', this.disconnect]
     * ]
     */
}