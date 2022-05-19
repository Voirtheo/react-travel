import React from "react";
import { useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>旅游路线详情页面,路线ID:{params.touristRouteId}</div>
    )
}