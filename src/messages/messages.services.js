const messageControllers = require('./messages.controllers')

const postMessage = (req, res) => {
    const userId = req.user.id
    const conversationId = req.params.conversation_id
    const { message } = req.body
    messageControllers.createMessage({ userId, conversationId, message })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message: err.message,
                fields: {
                    message: 'text'
                }
            })
        })
}
const getMessageById = (req, res) => {
    const id = req.params.message_id
    messageControllers.findMessageById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const deleteMessageById = (req, res) => {
    const id = req.params.message_id
    messageControllers.deleteMessageById(id)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    postMessage,
    getMessageById,
    deleteMessageById
}