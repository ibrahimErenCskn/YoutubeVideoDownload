export const DownloadComp = ({data}) => {

  return (
    <div className="w-[800px] mt-8">
        {data?.sources?.map((d,i)=> (
            <div key={i} className="mt-2 border-2 border-black flex items-center relative rounded-md gap-x-4 p-1">
                <img src={data.thumbnail} className="w-16 h-16 object-cover"/>
                <div className="ml-12">
                    Quality : {d.resolution}
                </div>
                <div>
                    Size : {d.size}
                </div>
                <div className="absolute right-1">
                    <a className="cursor-pointer" href={d.url+'&title='+data?.title} download={data.title} target="_blank">Download</a>
                </div>
            </div>
        ))}
    </div>
  )
}
