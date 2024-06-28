export default function Tempo(request, response){
    const dynamicDate = new Date()
    response.json({
        data: dynamicDate
    })
}