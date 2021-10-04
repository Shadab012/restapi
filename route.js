const express = require("express")
const router = new express.Router()
const st = require('./models/students')

router.post("/students", async (req, res) => {
    try {
        const user = new st(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/students", async (req, res) => {
    try {
        const userData = await st.find()
        res.send(userData)
    } catch (e) {
        res.send(e)
    }
})

router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const oneUser = await st.findById(_id)
        if (!oneUser) {
            return res.status(404).send()
        } else {
            res.send(oneUser)
        }

    } catch (e) {
        res.send(e)
    }
})

router.delete("/students/:id", async (req, res) => {
    try {
        const deleteUser = await st.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            return res.status(400).send()
        } else {
            res.send(deleteUser)
        }

    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const updateUser = await st.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateUser)

    } catch (e) {
        res.send(e)
    }
})

module.exports = router