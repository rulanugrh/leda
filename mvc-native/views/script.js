import "dotenv"

const formBook = new FormData(document.getElementById("book-form"))

async function uploadBook() {
    try {
        const response = await fetch(`http://${process.env.APP_HOST}:${process.env.APP_PORT}/api/v1/book/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formBook)
        })

        const jsonData = response.json()
        console.log(`Sucess : ${jsonData.msg}`)
    } catch (error) {
        console.error(`Something error :${error.message}`)
    }
}

uploadBook()