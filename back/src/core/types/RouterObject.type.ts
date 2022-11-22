import express from "express"
export type RouterObject = {
    router: express.Router,
    basePath: string
}