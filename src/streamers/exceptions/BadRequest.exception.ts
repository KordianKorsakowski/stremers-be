import { HttpException, HttpStatus } from "@nestjs/common";

export class BadReequest extends HttpException {
    constructor(msg?: string, status?: HttpStatus){
        super(msg || "Bad request", status || HttpStatus.BAD_REQUEST)
    }
}