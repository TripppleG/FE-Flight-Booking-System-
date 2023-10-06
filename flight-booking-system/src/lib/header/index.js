import React from "react"
import './styles.css';
import { Button, Layout } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";

const PlaneSvg = (props) => (
    <span className="profile-icon">
        <svg fill="#000000" version="1.1" id="Capa_1" width="40px" height="40px" viewBox="0 0 23.363 23.363">
            <g>
	            <path d="M22.925,2.564l-3.193,3.191c0.104,0.75-0.123,1.536-0.698,2.112L16.75,10.15l2.715,11.664   c0.041,0.072,0.062,0.155,0.062,0.244c0,0.277-0.269,0.486-0.509,0.5c-0.004,0-0.008,0-0.012,0c-0.13,0-0.257-0.05-0.354-0.146   l-7.083-7.084l-1.804,1.807l1.275,5.482c0.039,0.071,0.062,0.154,0.062,0.243c0,0.279-0.225,0.522-0.51,0.5   c-0.004,0-0.006,0-0.01,0c-0.129,0-0.258-0.05-0.354-0.146L6.283,19.27c-0.021-0.002-0.042-0.003-0.062-0.006l-0.592,0.592   c-0.293,0.293-0.678,0.439-1.062,0.439c-0.384,0-0.769-0.146-1.062-0.439c-0.586-0.586-0.586-1.535,0-2.121l0.594-0.593   c-0.004-0.021-0.004-0.041-0.006-0.062l-3.946-3.945c-0.158-0.158-0.192-0.401-0.084-0.598c0.108-0.195,0.327-0.297,0.551-0.244   L6.228,13.6l1.805-1.807L0.952,4.712c-0.157-0.157-0.192-0.4-0.084-0.598C0.976,3.919,1.197,3.818,1.419,3.87l11.794,2.744   l2.281-2.283c0.578-0.578,1.364-0.805,2.115-0.698l3.19-3.191c0.586-0.586,1.534-0.586,2.12,0   C23.507,1.027,23.511,1.979,22.925,2.564z"/>
            </g>
        </svg>
    </span>
);

const PageHeader = (props) => {
    const navigate = useNavigate();

    const onProfileClick = () => navigate('/profile');

    return (
        <Layout.Header className="page-header">
            <PlaneSvg />
            <h2>NBU Airlines</h2>
            <div className="profile-info">
                <UserOutlined className="profile-icon" />
                <Button onClick={onProfileClick} type="link">Profile</Button>
            </div>
        </Layout.Header>
    )
}

export default PageHeader;

