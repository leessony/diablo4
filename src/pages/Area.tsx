import {useSearchParams} from "react-router-dom";

function Area() {
    const [params] = useSearchParams();
    const areaName = params.get('name')
    return <div>{areaName}</div>
}

export default Area;