const Tweet = (props) => {
    const { username, name, date, content } = props;
    return <div>
        <h4 style={{ 'fontFamily': 'arial, sans-serif'}}>{name}</h4>
        <h5 style={{ color: 'gray', 'fontFamily': 'arial, sans-serif'}}>{username}</h5>
        <p style={{ color: 'blue', 'fontFamily': 'arial, sans-serif'}}>{content}</p>
        <p style={{ color: 'gray', 'fontFamily': 'arial, sans-serif', 'fontSsize': '.7rem'}}>{date}</p>
    </div>
}