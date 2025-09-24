export default function Information ({nama, status}) {
  return <h1 className={`text-green-700 ${status ===1?'text-red-500':''}`}>{nama}</h1>
}