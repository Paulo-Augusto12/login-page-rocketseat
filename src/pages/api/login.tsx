import type { NextApiRequest, NextApiResponse } from "next";

type ILoginResponse = {
    login: string;
    password: string
}

export default function home (request:NextApiRequest, response:NextApiResponse<ILoginResponse>) {
    const { login, password } = request.body

    response.status(200).json({login, password})
}