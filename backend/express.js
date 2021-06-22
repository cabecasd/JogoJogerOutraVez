import express from 'express';
import * as fs from "fs/promises"
const app = express()
const port = 3001

const MEMORIA = "localdata.json"
const EASY_QUESTIONS = "eQuestions.json"
const MEDIUM_QUESTIONS = "mQuestions.json"
const HARD_QUESTIONS = "hQuestions.json"

// const gameMemoryD = await fs.readFile(MEMORIA)
//         const gameMemory = JSON.parse(gameMemoryD.toString())
//         //acede a informacao das perguntas todas
//         const eQuestionsD = await fs.readFile(EASY_QUESTIONS)
//         const eQuestions = JSON.parse(eQuestionsD.toString())
//         const mQuestionsD = await fs.readFile(MEDIUM_QUESTIONS)
//         const mQuestions = JSON.parse(mQuestionsD.toString())
//         const hQuestionsD = await fs.readFile(HARD_QUESTIONS)
//         const hQuestions = JSON.parse(hQuestionsD.toString())

app.get('/api/joker', async (req, res) => {

    try {
        const gameMemoryD = await fs.readFile(MEMORIA)
        const gameMemory = JSON.parse(gameMemoryD.toString())


        let valorGerado = geraLetra()
        while (valorGerado === gameMemory.question.answer) {
            valorGerado = geraLetra()
        }

        gameMemory.question.answer !== valorGerado

        res.sendStatus(200).json({
            "jokers": gameMemory.jokers.aJoker,
            "apagar": g
        })
    } catch(error) {
        res.status(500).send("Erro ao tratar dos jokers")
    }
})

function geraLetra() {
    const indice = Math.floor(Math.random() * 4)
    const gerado = undefined

    switch(indice) {
        case 0:
            gerado = "a"
            break
        case 1:
            gerado = "b"
            break
        case 2:
            gerado = "c"
            break
        default:
            gerado = "d"
        }
    return gerado
}
