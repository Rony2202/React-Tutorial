const User = (props) => {
    return (
        <div className="User-card">
            <h2>Name: {props.name}</h2>
            <h2>Location: Thrissur</h2>
            <h2>Contact: 8078059674</h2>
        </div>
    )
}

export default User;