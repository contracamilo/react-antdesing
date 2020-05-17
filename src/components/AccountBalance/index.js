import React, {useState, useEffect} from "react";
import {Row, Col, Card, Button, Alert} from "antd";
import "./accountBalance.css";

const AccountBalance = () => {
	const [balance, setBalance] = useState(1300);
	const [savingBalance, setSavingBalance] = useState(1500);
	const [notification, setNotification] = useState(false);

	useEffect(() => {
		(balance <= 500) ? setNotification(true) : setNotification(false)
	}, [balance]);

	const handleSpending = () => {
		if (balance > 0) {
			setBalance(balance - 100);
			setSavingBalance(savingBalance + 100);
		}
	};

	const handleSavings = () => {
		if (savingBalance > 0) {
			setBalance(balance + 100);
			setSavingBalance(savingBalance - 100);
		}
	};

	return (
		<div>
			<Row gutter={24}>
				<Col span={12}>
                    {notification && (
						<Alert message="Your account balance is too low, your transfers are blocked" type="error" closable afterClose={() => {}} />
					)}
					<Card title="Your Account Balance:" bordered={false}>
						<div className="balance">
							<h2 className="balance__amount">{`$ ${balance}`}</h2>
							<Button disabled={notification} type="primary" onClick={() => handleSpending()}>
								send $100 money
							</Button>
						</div>
					</Card>
				</Col>
				<Col span={12}>
					<Card title="Your saving Balance" bordered={false}>
						<div className="savings">
							<h2 className="savings__amount">{`$ ${savingBalance}`}</h2>
							<Button type="primary" onClick={() => handleSavings()}>
								send money
							</Button>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default AccountBalance;
