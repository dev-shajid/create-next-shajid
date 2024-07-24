export default async function wait(time:number=1000):Promise<void> {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}