import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline"

import {
    HeartIcon as HeartIconFilled
} from "@heroicons/react/solid"

function Post({id,username,userImg,img,caption}) {
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img alt="" src={img} className="rounded-full h-12 w-12 object-contain border p-1 mr-3"></img>
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5 hover:cursor-pointer"/>
            </div>
            {/* img */}
            <img src={img} alt="" className="object-cover w-full"></img>
            {/* Buttons */}
            {/* caption */}
            {/* comments */}
            {/* input box */}
        </div>
    )
}

export default Post
