export default function Tempo(props){
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()
    return (
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )
}