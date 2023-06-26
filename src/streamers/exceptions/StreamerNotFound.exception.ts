import { HttpException, HttpStatus } from "@nestjs/common";

export class StreamerNotFound extends HttpException {
    constructor(msg?: string, status?: HttpStatus){
        super(msg || "Streamer not found", status || HttpStatus.NOT_FOUND)
    }
}