import React from 'react'
import { Card } from 'antd';

export const CardName = ({firstName, lastName, email, occupation, status }) =>{
    return (
        <div className="site-card-border-less-wrapper">
            <Card title={`New ${occupation}`} bordered={false} style={{ width: 300 }}>
            <p><b>Name:</b> {`${firstName} ${lastName}`}</p>
            <p><b>Email:</b> { email }</p>
            <p><b>Status:</b> { status }</p>
            </Card>
        </div>
    )
}

