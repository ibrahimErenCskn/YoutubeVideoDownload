import { useEffect } from "react"
import Input from "./companents/Input"
import { useState } from "react"
import Details from "./companents/Details"
import { DownloadComp } from "./companents/DownloadComp"

function App() {

  const [url , setUrl] = useState()
  const [ytData, setYtData] = useState()

  const download = ()=>{
    fetch(`http://127.0.0.1:5000/?url=${url}`)
    .then(res => res.json())
    .then(data => setYtData(data))
  }

  return (
    <div className="text-2xl w-full flex flex-col items-center justify-center h-screen">
      <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/youtube-logo.jpeg" className="w-48 h-48"/>
      <Input placeholder={"URL"} setUrl={setUrl} click={download}/>
      {ytData && <Details data={ytData}/>}
      {ytData && <DownloadComp data={ytData}/>}
    </div>
  )
}

export default App
