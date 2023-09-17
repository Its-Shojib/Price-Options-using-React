const Link = ({route}) => {
    let {path,name} = route;
    return (
        <div>
            <li ><a href={path}>{name}</a></li>
        </div>
    );
};

export default Link;