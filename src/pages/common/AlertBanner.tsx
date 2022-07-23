import Alert from 'react-bootstrap/Alert';

interface IAlertProps {
	message?: string;
	variant?: string;
}

const AlertBanner = ({ message, variant }: IAlertProps) => {
	const alertMessage = message || 'An unexpected error occurred. Please try again later.';
	const alertVariant = variant || 'danger';

	return (
		<Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
			{alertMessage}
		</Alert>
	);
};

export default AlertBanner;
