export default function Details ({data}){
    return(
        <div className="w-[800px] h-52 border-2 border-black mt-8 flex items-center justify-center text-xl p-1 relative">
            <img src={data.thumbnail} className="w-48 h-48 object-cover absolute left-1"/>
            <div className="flex flex-col items-center justify-center gap-y-4 ml-24">
                <div>
                    {data.auther}
                </div>
                <div>
                    {data.title}
                </div>
                <div>
                    Length : {data.length}
                </div>
                <div>
                    Views : {data.views}
                </div>
            </div>
        </div>
    )
}