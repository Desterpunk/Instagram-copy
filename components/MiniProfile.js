function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10" >
            <img src="https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg" alt="" 
            className="rounded-full border p-[2px] w-16 h-16"></img>
            <div className="flex-1 mx-4">
                <h2 className="font-bold">jhon</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>

            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
