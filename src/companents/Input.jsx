const Input = ({type, placeholder,setUrl,click}) =>{

    return(
        <div className="relative flex items-center justify-center w-[800px]">
            <input type={type} placeholder={placeholder} className="outline-none border-2 rounded-l-full rounded-r-full w-[800px] pl-4 h-16 border-black pr-32" onChange={e => setUrl(e.target.value)}/>
            <button className="absolute right-0 top-0 border rounded-r-full w-32 h-16 cursor-pointer flex items-center justify-center border-black" onClick={click}>Download</button>
        </div>
    )
}

export default Input