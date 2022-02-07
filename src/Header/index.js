import './index.css'
const Header = () => {

    return(
        <div className="header">
            <div className="infomations">
                <div className='avatarBorder'>
                    <img src="https://wwc.alicdn.com/avatar/getAvatar.do?userNick=if%E6%B5%8B%E8%AF%95%E8%B4%A6%E5%8F%B7025&_input_charset=UTF-8&width=160&height=160&type=sns_110x10000Q75.jpg_.webp" alt="" className="avatar" />
                </div>
                <p className="name">Yooleen</p>
                <p className="time">12:00</p>
            </div>
        </div>
    )
}

export default Header