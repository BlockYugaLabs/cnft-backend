import 'dotenv/config'

function test(): void {

    console.log("Env Configuration:", process.env.TEST, "Yo");
}
test()